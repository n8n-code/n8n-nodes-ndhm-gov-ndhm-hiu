import type { INodeProperties } from 'n8n-workflow';

export const identificationDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Identification"
					]
				}
			},
			"options": [
				{
					"name": "POST v0 5 Patients On Find",
					"value": "POST v0 5 Patients On Find",
					"action": "Identification result for a consent-manager user-id",
					"description": "If a patient is found then patient.name contains the patients name. \nOtherwise, patient is not provided, and possibly error is raised for invalid requests\nNote in addition to the \"Authorization\" header, one of the following headers must be specified\n1. specify **X-HIU-ID** if the requester is HIU (identified from /find requester.id)\n2. specify **X-HIP-ID** if the requester is HIP (identified from /find requester.id)\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/patients/on-find"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v0.5/patients/on-find",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Identification"
					],
					"operation": [
						"POST v0 5 Patients On Find"
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
						"Identification"
					],
					"operation": [
						"POST v0 5 Patients On Find"
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
						"Identification"
					],
					"operation": [
						"POST v0 5 Patients On Find"
					]
				}
			}
		},
		{
			"displayName": "Patient",
			"name": "patient",
			"type": "json",
			"default": "{\n  \"id\": \"hinapatel79@ndhm\",\n  \"name\": \"Hina Patel\"\n}",
			"routing": {
				"send": {
					"property": "patient",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Identification"
					],
					"operation": [
						"POST v0 5 Patients On Find"
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
						"Identification"
					],
					"operation": [
						"POST v0 5 Patients On Find"
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
						"Identification"
					],
					"operation": [
						"POST v0 5 Patients On Find"
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
						"Identification"
					],
					"operation": [
						"POST v0 5 Patients On Find"
					]
				}
			}
		},
];
