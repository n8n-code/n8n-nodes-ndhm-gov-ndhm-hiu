import type { INodeProperties } from 'n8n-workflow';

export const gatewayDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					]
				}
			},
			"options": [
				{
					"name": "GET v0 5 Well Known Openid Configuration",
					"value": "GET v0 5 Well Known Openid Configuration",
					"action": "Get openid configuration",
					"description": "Get openid configuration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v0.5/.well-known/openid-configuration"
						}
					}
				},
				{
					"name": "GET v0 5 Certs",
					"value": "GET v0 5 Certs",
					"action": "Get certs for JWT verification",
					"description": "Get certs for JWT verification",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v0.5/certs"
						}
					}
				},
				{
					"name": "POST v0 5 Consent Requests Init",
					"value": "POST v0 5 Consent Requests Init",
					"action": "Create consent request",
					"description": "Creates a consent request to get data about a patient by HIU user.",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/consent-requests/init"
						}
					}
				},
				{
					"name": "POST v0 5 Consent Requests Status",
					"value": "POST v0 5 Consent Requests Status",
					"action": "Get consent request status",
					"description": "Get status of consent request done previously",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/consent-requests/status"
						}
					}
				},
				{
					"name": "POST v0 5 Consents Fetch",
					"value": "POST v0 5 Consents Fetch",
					"action": "Get consent artefact",
					"description": "Get consent artefact",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/consents/fetch"
						}
					}
				},
				{
					"name": "POST v0 5 Consents Hiu On Notify",
					"value": "POST v0 5 Consents Hiu On Notify",
					"action": "Consent notification",
					"description": "This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/consents/hiu/on-notify"
						}
					}
				},
				{
					"name": "POST v0 5 Health Information Cm Request",
					"value": "POST v0 5 Health Information Cm Request",
					"action": "Health information data request",
					"description": "Request for Health information against a consent id. CM would generate a transactionId against each consent and pass it as trnasaction context / correlation id to the HIP and also return the same to HIU via /on-request. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/health-information/cm/request"
						}
					}
				},
				{
					"name": "POST v0 5 Health Information Notify",
					"value": "POST v0 5 Health Information Notify",
					"action": "Notifications corresponding to events during data flow",
					"description": "API called by HIU and HIP during data-transfer.\n1. HIP on transfer of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]\n2. HIP would also send **hiStatus** for each *careContextReference* - on of [DELIVERED, ERRORED]\n3. HIU on receipt of data would send **sessionStatus** - one of [TRANSFERRED, FAILED]. For example, FAILED when if data was not sent or if invalid data was sent\n4. HIU would also send **hiStatus** for each *careContextReference* - one of [OK, ERRORED]\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/health-information/notify"
						}
					}
				},
				{
					"name": "POST v0 5 Patients Find",
					"value": "POST v0 5 Patients Find",
					"action": "Identify a patient by her consent-manager user-id",
					"description": "This API is meant for identify to patient given her consent-manager-user-id\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/patients/find"
						}
					}
				},
				{
					"name": "POST v0 5 Sessions",
					"value": "POST v0 5 Sessions",
					"action": "Get access token",
					"description": "Get access token",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/sessions"
						}
					}
				},
				{
					"name": "POST v0 5 Subscription Requests Cm Init",
					"value": "POST v0 5 Subscription Requests Cm Init",
					"action": "Request for subscription",
					"description": "creates a request for subscription. The subscription categories can be for care-contexts linkages or availability of data against existing care-contexts. Note that the requester must have HIU role",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/subscription-requests/cm/init"
						}
					}
				},
				{
					"name": "POST v0 5 Subscription Requests Hiu On Notify",
					"value": "POST v0 5 Subscription Requests Hiu On Notify",
					"action": "Callback API for /subscription-requests/hiu/notify to acknowledge receipt of notification.",
					"description": "This API is called by HIU as acknowledgement to subscription request relevant notifications. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/subscription-requests/hiu/on-notify"
						}
					}
				},
				{
					"name": "POST v0 5 Subscriptions Hiu On Notify",
					"value": "POST v0 5 Subscriptions Hiu On Notify",
					"action": "Callback API for /subscriptions/hiu/notify to acknowledge receipt of notification.",
					"description": "This API is called by HIU as acknowledgement to consent notifications, specifically for cases when consent is REVOKED or EXPIRED.\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/subscriptions/hiu/on-notify"
						}
					}
				},
				{
					"name": "POST v0 5 Users Auth Confirm",
					"value": "POST v0 5 Users Auth Confirm",
					"action": "Confirmation request sending token, otp or other authentication details from HIP/HIU for confirmation",
					"description": "This API is called by HIP/HIUs to confirm authentication of users. The transactionId returned by the previous callback API /users/auth/on-init must be sent. If Authentication is successful the callback API will send an \"access token\" for subsequent purpose specific API calls. Note only **credential.authCode** or **credential.demographic** should be sent\n  1. demographic details are only required for  demographic auth as of now. \n  2. demographic details are required only in MEDIATED cases and if the **auth.mode** so demands. e.g. if **auth.mode** is DEMOGRAPHICS. Usually for demographic authentication, the name, gender and DOB must be exactly as specified in User Account.\n  3. demographic.identifier is optional, however maybe required if authentication so mandates. \n  4. credential.authCode is required for other MEDIATED authentication like MOBILE_OTP, AADHAAR_OTP. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/users/auth/confirm"
						}
					}
				},
				{
					"name": "POST v0 5 Users Auth Fetch Modes",
					"value": "POST v0 5 Users Auth Fetch Modes",
					"action": "Get a patient's authentication modes relevant to specified purpose",
					"description": "This API is meant for identify supported authentication modes for a patient given a specific purpose\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/users/auth/fetch-modes"
						}
					}
				},
				{
					"name": "POST v0 5 Users Auth Init",
					"value": "POST v0 5 Users Auth Init",
					"action": "Initialize authentication from HIP",
					"description": "This API is called by HIPs to initiate authentication of users. A transactionId is retuned by the corresponding callback API for confirmation of user auth.\n  1. **NOTE**, only **KYC** purpose is applicable for HIU. Hence HIU should only sent KYC in **query.authMode** in the request\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/users/auth/init"
						}
					}
				},
				{
					"name": "POST v0 5 Users Auth On Notify",
					"value": "POST v0 5 Users Auth On Notify",
					"action": "callback API by HIU/HIPs as acknowledgement of auth notification",
					"description": "This API is called by HIU/HIPs to confirm acknowledgement for receipt of auth notification is case of DIRECT authentication. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/users/auth/on-notify"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v0.5/.well-known/openid-configuration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"GET v0 5 Well Known Openid Configuration"
					]
				}
			}
		},
		{
			"displayName": "GET /v0.5/certs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"GET v0 5 Certs"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/consent-requests/init",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Init"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Init"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Init"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Consent",
			"name": "consent",
			"type": "json",
			"default": "{\n  \"careContexts\": [\n    {\n      \"careContextReference\": \"Episode1\",\n      \"patientReference\": \"batman@tmh\"\n    }\n  ],\n  \"hiTypes\": [\n    null\n  ],\n  \"hip\": {},\n  \"hiu\": {},\n  \"patient\": {},\n  \"permission\": {\n    \"dateRange\": {},\n    \"frequency\": {}\n  },\n  \"purpose\": {},\n  \"requester\": {\n    \"identifier\": {\n      \"system\": \"https://www.mciindia.org\",\n      \"type\": \"REGNO\",\n      \"value\": \"MH1001\"\n    },\n    \"name\": \"Dr. Manju\"\n  }\n}",
			"routing": {
				"send": {
					"property": "consent",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Init"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
			"name": "requestId",
			"type": "string",
			"default": "499a5a4a-7dda-4f20-9b67-e24589627061",
			"description": "a nonce, unique for each HTTP request.",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Init"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Init"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/consent-requests/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Status"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Status"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Consent Request ID",
			"name": "consentRequestId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "consentRequestId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Status"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Status"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consent Requests Status"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/consents/fetch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Fetch"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Fetch"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Fetch"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Consent ID",
			"name": "consentId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "consentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Fetch"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Fetch"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Fetch"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/consents/hiu/on-notify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Hiu On Notify"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Hiu On Notify"
					]
				}
			}
		},
		{
			"displayName": "Acknowledgement",
			"name": "acknowledgement",
			"type": "json",
			"default": "[\n  {\n    \"consentId\": \"<consent-artefact-id>\"\n  }\n]",
			"routing": {
				"send": {
					"property": "acknowledgement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Hiu On Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Consents Hiu On Notify"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/health-information/cm/request",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Cm Request"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Cm Request"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Cm Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Hi Request",
			"name": "hiRequest",
			"type": "json",
			"default": "{\n  \"consent\": {},\n  \"dateRange\": {},\n  \"keyMaterial\": {\n    \"cryptoAlg\": \"ECDH\",\n    \"curve\": \"Curve25519\",\n    \"dhPublicKey\": {\n      \"parameters\": \"Curve25519/32byte random key\"\n    },\n    \"nonce\": \"3fa85f64-5717-4562-b3fc-2c963f66afa6\"\n  }\n}",
			"routing": {
				"send": {
					"property": "hiRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Cm Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
			"name": "requestId",
			"type": "string",
			"default": "a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Cm Request"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Cm Request"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/health-information/notify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Notify"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification",
			"name": "notification",
			"type": "json",
			"default": "{\n  \"consentId\": \"a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d\",\n  \"notifier\": {\n    \"id\": \"tmh\"\n  },\n  \"statusNotification\": {\n    \"hipId\": \"max\",\n    \"statusResponses\": [\n      {\n        \"hiStatus\": \"OK\"\n      }\n    ]\n  },\n  \"transactionId\": {}\n}",
			"routing": {
				"send": {
					"property": "notification",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
			"name": "requestId",
			"type": "string",
			"default": "499a5a4a-7dda-4f20-9b67-e24589627061",
			"description": "a nonce, unique for each HTTP request.",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Health Information Notify"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/patients/find",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Patients Find"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Patients Find"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Patients Find"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Query",
			"name": "query",
			"type": "json",
			"default": "{\n  \"patient\": {\n    \"id\": \"hinapatel79@ndhm\"\n  },\n  \"requester\": {\n    \"id\": 100005\n  }\n}",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Patients Find"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Patients Find"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Patients Find"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/sessions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Sessions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client ID",
			"name": "clientId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Sessions"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Client Secret",
			"name": "clientSecret",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "clientSecret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Sessions"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/subscription-requests/cm/init",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Cm Init"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Cm Init"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Cm Init"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
			"name": "requestId",
			"type": "string",
			"default": "499a5a4a-7dda-4f20-9b67-e24589627061",
			"description": "a nonce, unique for each HTTP request.",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Cm Init"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Subscription",
			"name": "subscription",
			"type": "json",
			"default": "{\n  \"categories\": [\n    null\n  ],\n  \"hips\": [\n    {}\n  ],\n  \"hiu\": {},\n  \"patient\": {\n    \"id\": \"hinapatel@ndhm\"\n  },\n  \"period\": {},\n  \"purpose\": {}\n}",
			"routing": {
				"send": {
					"property": "subscription",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Cm Init"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Cm Init"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/subscription-requests/hiu/on-notify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Hiu On Notify"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Hiu On Notify"
					]
				}
			}
		},
		{
			"displayName": "Acknowledgement",
			"name": "acknowledgement",
			"type": "json",
			"default": "{\n  \"subscriptionRequestId\": \"subscription Id\"\n}",
			"routing": {
				"send": {
					"property": "acknowledgement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Hiu On Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscription Requests Hiu On Notify"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/subscriptions/hiu/on-notify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscriptions Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscriptions Hiu On Notify"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscriptions Hiu On Notify"
					]
				}
			}
		},
		{
			"displayName": "Acknowledgement",
			"name": "acknowledgement",
			"type": "json",
			"default": "{\n  \"eventId\": \"subscription event Id\"\n}",
			"routing": {
				"send": {
					"property": "acknowledgement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscriptions Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscriptions Hiu On Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscriptions Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscriptions Hiu On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Subscriptions Hiu On Notify"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/users/auth/confirm",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Confirm"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Confirm"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Confirm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Credential",
			"name": "credential",
			"type": "json",
			"default": "{\n  \"demographic\": {\n    \"dateOfBirth\": \"1972-02-29\",\n    \"identifier\": {\n      \"value\": \"+919800083232\"\n    },\n    \"name\": \"janki das\"\n  }\n}",
			"description": "note, demographic details are only required for demographic auth at this point.",
			"routing": {
				"send": {
					"property": "credential",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Confirm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Confirm"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Confirm"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Transaction ID",
			"name": "transactionId",
			"type": "string",
			"default": "",
			"routing": {
				"send": {
					"property": "transactionId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Confirm"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/users/auth/fetch-modes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Fetch Modes"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Fetch Modes"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Fetch Modes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Query",
			"name": "query",
			"type": "json",
			"default": "{\n  \"id\": \"hinapatel79@ndhm\",\n  \"requester\": {\n    \"id\": \"100005\"\n  }\n}",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Fetch Modes"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Fetch Modes"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Fetch Modes"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/users/auth/init",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Init"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Init"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Init"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Query",
			"name": "query",
			"type": "json",
			"default": "{\n  \"id\": \"hinapatel@ndhm\",\n  \"requester\": {\n    \"id\": 100005\n  }\n}",
			"routing": {
				"send": {
					"property": "query",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Init"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Init"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth Init"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/users/auth/on-notify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth On Notify"
					]
				}
			}
		},
		{
			"displayName": "X CM ID",
			"name": "X-CM-ID",
			"required": true,
			"description": "Suffix of the consent manager to which the request was intended.",
			"default": "",
			"type": "string",
			"routing": {
				"request": {
					"headers": {
						"X-CM-ID": "={{ $value }}"
					}
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth On Notify"
					]
				}
			}
		},
		{
			"displayName": "Acknowledgement",
			"name": "acknowledgement",
			"type": "json",
			"default": "{}",
			"routing": {
				"send": {
					"property": "acknowledgement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth On Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request ID",
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth On Notify"
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
						"Gateway"
					],
					"operation": [
						"POST v0 5 Users Auth On Notify"
					]
				}
			}
		},
];
