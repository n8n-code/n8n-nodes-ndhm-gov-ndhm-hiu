import type { INodeProperties } from 'n8n-workflow';

export const userAuthDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					]
				}
			},
			"options": [
				{
					"name": "POST V 0 5 Users Auth Notify",
					"value": "POST V 0 5 Users Auth Notify",
					"action": "notification API in case of DIRECT mode of authentication by the CM",
					"description": "This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The \"auth.status\" conveys whether the request was GRANTED or DENIED.\n\n  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts\n  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.\n  3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/users/auth/notify"
						}
					}
				},
				{
					"name": "POST V 0 5 Users Auth On Confirm",
					"value": "POST V 0 5 Users Auth On Confirm",
					"action": "callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not",
					"description": "This API is called by CM to confirm authentication of users.\n\n  1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts\n  2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/users/auth/on-confirm"
						}
					}
				},
				{
					"name": "POST V 0 5 Users Auth On Fetch Modes",
					"value": "POST V 0 5 Users Auth On Fetch Modes",
					"action": "Identification result for a consent-manager user-id",
					"description": "If a patient is found then **auth** attribute contains the supported modes for the specified purpose. \nOtherwise, error is raised for invalid requests or for non-existent id.\nNote in addition to the \"Authorization\" header, one of the following headers must be specified\n1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)\n2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/users/auth/on-fetch-modes"
						}
					}
				},
				{
					"name": "POST V 0 5 Users Auth On Init",
					"value": "POST V 0 5 Users Auth On Init",
					"action": "Response to user authentication initialization from HIP",
					"description": "If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. \n\n  1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values \n      1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. \n      2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. \n      3. DEMOGRAPHICS - auth initiated with demographic verification\n      4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester\n  2. **meta.expiry** conveys the expiry time of the token and the authentication session\n  3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. \n  4. **NOTE**, only KYC purpose is applicable for HIU\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  \nThe error section in the body, represents the potential errors that may have occurred. Possible reasons:\n  1. Patient id is invalid\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/users/auth/on-init"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v0.5/users/auth/notify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth Notify"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth Notify"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID",
			"name": "X-HIP-ID",
			"required": true,
			"description": "Identifier of the health information provider to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth Notify"
					]
				}
			}
		},
		{
			"displayName": "X HIU ID",
			"name": "X-HIU-ID",
			"required": true,
			"description": "Identifier of the health information user to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-HIU-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth Notify"
					]
				}
			}
		},
		{
			"displayName": "Auth",
			"name": "auth",
			"type": "json",
			"default": "{\n  \"patient\": {\n    \"address\": {},\n    \"id\": \"<patient-id>@<consent-manager-id>\",\n    \"identifiers\": [\n      {\n        \"value\": \"+919800083232\"\n      }\n    ],\n    \"name\": \"Hina Patel\",\n    \"yearOfBirth\": 2000\n  },\n  \"validity\": {\n    \"limit\": \"1\",\n    \"requester\": {\n      \"id\": 100005\n    }\n  }\n}",
			"description": "depending on the purpose of auth, as specified in /auth/init, the response may include the following \n  1. LINK - only returns **accessToken**\n  2. KYC - only returns **patient**\n  3. KYC_AND_LINK - returns both **accessToken** and **patient**\n",
			"routing": {
				"send": {
					"property": "auth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request Id",
			"name": "requestId",
			"type": "string",
			"default": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
			"description": "a nonce, unique for each HTTP request",
			"routing": {
				"send": {
					"property": "requestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "string",
			"default": "",
			"description": "Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ",
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth Notify"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/users/auth/on-confirm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Confirm"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Confirm"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID",
			"name": "X-HIP-ID",
			"required": true,
			"description": "Identifier of the health information provider to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Confirm"
					]
				}
			}
		},
		{
			"displayName": "X HIU ID",
			"name": "X-HIU-ID",
			"required": true,
			"description": "Identifier of the health information user to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-HIU-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Confirm"
					]
				}
			}
		},
		{
			"displayName": "Auth",
			"name": "auth",
			"type": "json",
			"default": "{\n  \"patient\": {\n    \"address\": {},\n    \"id\": \"<patient-id>@<consent-manager-id>\",\n    \"identifiers\": [\n      {\n        \"value\": \"+919800083232\"\n      }\n    ],\n    \"name\": \"Hina Patel\",\n    \"yearOfBirth\": 2000\n  },\n  \"validity\": {\n    \"limit\": \"1\",\n    \"requester\": {\n      \"id\": 100005\n    }\n  }\n}",
			"description": "depending on the purpose of auth, as specified in /auth/init, the response may include the following \n  1. LINK - only returns **accessToken**\n  2. KYC - only returns **patient**\n  3. KYC_AND_LINK - returns both **accessToken** and **patient**\n",
			"routing": {
				"send": {
					"property": "auth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Confirm"
					]
				}
			}
		},
		{
			"displayName": "Error",
			"name": "error",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Confirm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request Id",
			"name": "requestId",
			"type": "string",
			"default": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
			"description": "a nonce, unique for each HTTP request",
			"routing": {
				"send": {
					"property": "requestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Confirm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resp",
			"name": "resp",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "resp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Confirm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "string",
			"default": "",
			"description": "Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ",
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Confirm"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/users/auth/on-fetch-modes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Fetch Modes"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Fetch Modes"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID",
			"name": "X-HIP-ID",
			"required": true,
			"description": "Identifier of the health information provider to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Fetch Modes"
					]
				}
			}
		},
		{
			"displayName": "X HIU ID",
			"name": "X-HIU-ID",
			"required": true,
			"description": "Identifier of the health information user to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-HIU-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Fetch Modes"
					]
				}
			}
		},
		{
			"displayName": "Auth",
			"name": "auth",
			"type": "json",
			"default": "{\n  \"modes\": [\n    null\n  ]\n}",
			"routing": {
				"send": {
					"property": "auth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Fetch Modes"
					]
				}
			}
		},
		{
			"displayName": "Error",
			"name": "error",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Fetch Modes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request Id",
			"name": "requestId",
			"type": "string",
			"default": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
			"description": "a nonce, unique for each HTTP request",
			"routing": {
				"send": {
					"property": "requestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Fetch Modes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resp",
			"name": "resp",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "resp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Fetch Modes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "string",
			"default": "",
			"description": "Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ",
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Fetch Modes"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/users/auth/on-init",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Init"
					]
				}
			}
		},
		{
			"displayName": "Authorization",
			"name": "Authorization",
			"required": true,
			"description": "Access token which was issued after successful login with gateway auth server, which will be sent by gateway to authenticate itself with API bridge.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"Authorization": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Init"
					]
				}
			}
		},
		{
			"displayName": "X HIP ID",
			"name": "X-HIP-ID",
			"required": true,
			"description": "Identifier of the health information provider to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-HIP-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Init"
					]
				}
			}
		},
		{
			"displayName": "X HIU ID",
			"name": "X-HIU-ID",
			"required": true,
			"description": "Identifier of the health information user to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-HIU-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Init"
					]
				}
			}
		},
		{
			"displayName": "Auth",
			"name": "auth",
			"type": "json",
			"default": "{\n  \"meta\": {\n    \"expiry\": \"2019-12-30T12:01:55Z\"\n  }\n}",
			"routing": {
				"send": {
					"property": "auth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Init"
					]
				}
			}
		},
		{
			"displayName": "Error",
			"name": "error",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "error",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Init"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request Id",
			"name": "requestId",
			"type": "string",
			"default": "5f7a535d-a3fd-416b-b069-c97d021fbacd",
			"description": "a nonce, unique for each HTTP request",
			"routing": {
				"send": {
					"property": "requestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Init"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Resp",
			"name": "resp",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "resp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Init"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Timestamp",
			"name": "timestamp",
			"type": "string",
			"default": "",
			"description": "Date time format in UTC, includes miliseconds YYYY-MM-DDThh:mm:ss.vZ",
			"routing": {
				"send": {
					"property": "timestamp",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"User Auth"
					],
					"operation": [
						"POST V 0 5 Users Auth On Init"
					]
				}
			}
		},
];
