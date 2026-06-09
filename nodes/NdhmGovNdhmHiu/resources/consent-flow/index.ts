import type { INodeProperties } from 'n8n-workflow';

export const consentFlowDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Consent Flow"
					]
				}
			},
			"options": [
				{
					"name": "POST V 0 5 Consent Requests On Init",
					"value": "POST V 0 5 Consent Requests On Init",
					"action": "Response to consent request",
					"description": "Result of consent request creation for a patient. **id** represents the consentrequest id created by CM. The result must contain either **id** or the **error** caused. <br/>\n  Reasons for error may be\n  * Invalid references (e.g patient id, hiu id), purpose, hiTypes, ranges, persmission\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/consent-requests/on-init"
						}
					}
				},
				{
					"name": "POST V 0 5 Consent Requests On Status",
					"value": "POST V 0 5 Consent Requests On Status",
					"action": "Result of consent request status",
					"description": "Result of consent request done previously. Status of request can be GRANTED,  DENIED, EXPIRED. If the request was GRANTED, then \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/consent-requests/on-status"
						}
					}
				},
				{
					"name": "POST V 0 5 Consents Hiu Notify",
					"value": "POST V 0 5 Consents Hiu Notify",
					"action": "Consent notification",
					"description": "Health information user will get notified about the consent request granted or denied, consent revoked, consent expired. \n1. For consent request grant, status=GRANTED, consentRequestId=<consent-request-id>, and consentArtefacts is an array of generated consent artefact Ids.\n2. For consent request expiry, status=EXPIRED, consentRequestId=<consent-request-id>\n3. For consent request denied, status=DENIED, consentRequestId=<consent-request-id>\n4. For consent revocation, status=REVOKED, consentArtefacts is an array of revoked consent artefact ids\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/consents/hiu/notify"
						}
					}
				},
				{
					"name": "POST V 0 5 Consents On Fetch",
					"value": "POST V 0 5 Consents On Fetch",
					"action": "Result of fetch request for a consent artefact",
					"description": "Must contain either consent or error. Possible reason of errors are \n1. consentId passed through /fetch is invalid\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/consents/on-fetch"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v0.5/consent-requests/on-init",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Init"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Init"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Init"
					]
				}
			}
		},
		{
			"displayName": "Consent Request",
			"name": "consentRequest",
			"type": "json",
			"default": "{\n  \"id\": \"f29f0e59-8388-4698-9fe6-05db67aeac46\"\n}",
			"routing": {
				"send": {
					"property": "consentRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Init"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Init"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Init"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Init"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Init"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/consent-requests/on-status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Status"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Status"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Status"
					]
				}
			}
		},
		{
			"displayName": "Consent Request",
			"name": "consentRequest",
			"type": "json",
			"default": "{\n  \"consentArtefacts\": [\n    {\n      \"id\": \"<consent-artefact-id>\"\n    }\n  ],\n  \"id\": \"<consent-request-id>\"\n}",
			"routing": {
				"send": {
					"property": "consentRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Status"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Status"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Status"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Status"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consent Requests On Status"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/consents/hiu/notify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents Hiu Notify"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents Hiu Notify"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents Hiu Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification",
			"name": "notification",
			"type": "json",
			"default": "{\n  \"consentArtefacts\": [\n    {\n      \"id\": \"<consent-artefact-id>\"\n    }\n  ],\n  \"consentRequestId\": \"<consent-request-id>\"\n}",
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents Hiu Notify"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents Hiu Notify"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents Hiu Notify"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/consents/on-fetch",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents On Fetch"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents On Fetch"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents On Fetch"
					]
				}
			}
		},
		{
			"displayName": "Consent",
			"name": "consent",
			"type": "json",
			"default": "{\n  \"consentDetail\": {\n    \"careContexts\": [\n      {\n        \"careContextReference\": \"Episode1\",\n        \"patientReference\": \"hinapatel79@hospital\"\n      }\n    ],\n    \"consentManager\": {},\n    \"hiTypes\": [\n      null\n    ],\n    \"hip\": {},\n    \"hiu\": {},\n    \"patient\": {\n      \"id\": \"hinapatel@ndhm\"\n    },\n    \"permission\": {\n      \"dateRange\": {},\n      \"frequency\": {}\n    },\n    \"purpose\": {},\n    \"requester\": {\n      \"identifier\": {\n        \"system\": \"https://www.mciindia.org\",\n        \"type\": \"REGNO\",\n        \"value\": \"MH1001\"\n      },\n      \"name\": \"Dr. Manju\"\n    }\n  },\n  \"signature\": \"Signature of CM as defined in W3C standards; Base64 encoded\"\n}",
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents On Fetch"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents On Fetch"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents On Fetch"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents On Fetch"
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
						"Consent Flow"
					],
					"operation": [
						"POST V 0 5 Consents On Fetch"
					]
				}
			}
		},
];
