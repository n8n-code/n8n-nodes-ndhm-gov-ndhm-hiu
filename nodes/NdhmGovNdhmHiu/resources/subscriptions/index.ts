import type { INodeProperties } from 'n8n-workflow';

export const subscriptionsDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					]
				}
			},
			"options": [
				{
					"name": "POST V 0 5 Subscription Requests Hiu Notify",
					"value": "POST V 0 5 Subscription Requests Hiu Notify",
					"action": "Notification for subscription grant/deny/revoke",
					"description": "This API is used by CM to notify a HIU to grant or deny a request for subscription, and also to notify that in case an existing subscription is revoked or expired. For notifying that a particular subscription request was GRANTED or DENIED, the **subscriptionRequestId** is passed. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/subscription-requests/hiu/notify"
						}
					}
				},
				{
					"name": "POST V 0 5 Subscription Requests Hiu On Init",
					"value": "POST V 0 5 Subscription Requests Hiu On Init",
					"action": "callback API for the /subscription-requests/cm/init to notify a HIU on acceptance/acknowledgement of the request for subscription.",
					"description": "This callback API acknowledges the request for subscription from a HIU, and sends back a \"id\" that will be used when the patient/user approves or denies the subscription. \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/subscription-requests/hiu/on-init"
						}
					}
				},
				{
					"name": "POST V 0 5 Subscriptions Hiu Notify",
					"value": "POST V 0 5 Subscriptions Hiu Notify",
					"action": "Notification to HIU on basis of a granted subscription",
					"description": "This API is used by CM to notify a HIU for notification relevant to subscription. Notifications are sent to subscribed HIUs whenever a new care-context is linked or new data is available on an existing linked care-context. \n1. if event.category = LINK, then only care-contexts are passed when new care-contexts are linked for patient. \n2. If event.category = DATA, then hiTypes are passed. Care-context is passed only if the subscribed HIU has any valid consent for that care-context\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/subscriptions/hiu/notify"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v0.5/subscription-requests/hiu/notify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu Notify"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu Notify"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Notification",
			"name": "notification",
			"type": "json",
			"default": "{\n  \"subscription\": {\n    \"hiu\": {},\n    \"id\": \"subscription Id\",\n    \"patient\": {\n      \"id\": \"hinapatel@ndhm\"\n    },\n    \"sources\": [\n      {\n        \"categories\": [\n          null\n        ],\n        \"hip\": {},\n        \"period\": {}\n      }\n    ]\n  },\n  \"subscriptionRequestId\": \"request id of the subscription\"\n}",
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu Notify"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu Notify"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu Notify"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/subscription-requests/hiu/on-init",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu On Init"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu On Init"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu On Init"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu On Init"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu On Init"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu On Init"
					]
				}
			}
		},
		{
			"displayName": "Subscription Request",
			"name": "subscriptionRequest",
			"type": "json",
			"default": "{\n  \"id\": \"f29f0e59-8388-4698-9fe6-05db67aeac46\"\n}",
			"routing": {
				"send": {
					"property": "subscriptionRequest",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu On Init"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscription Requests Hiu On Init"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/subscriptions/hiu/notify",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscriptions Hiu Notify"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscriptions Hiu Notify"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscriptions Hiu Notify"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Event",
			"name": "event",
			"type": "json",
			"default": "{\n  \"content\": {\n    \"context\": [\n      {\n        \"careContext\": {\n          \"careContextReference\": \"Episode1\",\n          \"patientReference\": \"batman@tmh\"\n        },\n        \"hiTypes\": [\n          null\n        ]\n      }\n    ],\n    \"hip\": {},\n    \"patient\": {\n      \"id\": \"hinapatel@ndhm\"\n    }\n  },\n  \"id\": \"a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d\",\n  \"subscriptionId\": \"subscription Id\"\n}",
			"routing": {
				"send": {
					"property": "event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscriptions Hiu Notify"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscriptions Hiu Notify"
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
						"Subscriptions"
					],
					"operation": [
						"POST V 0 5 Subscriptions Hiu Notify"
					]
				}
			}
		},
];
