import type { INodeProperties } from 'n8n-workflow';

export const dataFlowDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Data Flow"
					]
				}
			},
			"options": [
				{
					"name": "POST V 0 5 Health Information Hiu On Request",
					"value": "POST V 0 5 Health Information Hiu On Request",
					"action": "Health information data request",
					"description": "Callback API for acknowledgement of Health information request made by HIU. Gateway calls this API when request has validated for the specified  consent id. Either the **hiRequest** or **error** would be specified. If the health info request was valid, then the ***hiRequest.transactionId*** specifies the transaction context against which HIP would send over the data.  Possible cases of errors are\n  1. **Invalid consent artefact id**\n  2. **Consent has expired**\n  3. **Date ranges are invalid**\n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/health-information/hiu/on-request"
						}
					}
				},
				{
					"name": "POST V 0 5 Health Information Transfer",
					"value": "POST V 0 5 Health Information Transfer",
					"action": "health information transfer API",
					"description": "**NOTE**: This API is actually the callback URL that is passed as **dataPushUrl** in the data request API - /v0.5/health-information/hip/request. This API is directly called by HIP Data Bridge and is not mediated via CM, and hence not routed through the Gateway. \n  1. This API should be implemented at HIU side. It maybe implemented by the Data Bridge representing the HIU. \n  2. Entry elements maybe ***content*** or ***link***, although for version 1, entry ***content*** is preferred. \n  3. Entry ***content*** (or even link reference content) must be encrypted by means of Elliptic-curve Diffie–Hellman Key Exchange, utilizing the HIU keymaterials that are passed through the data request API - /v0.5/health-information/hip/request. \n  4. Media contains the mimetype of content, and for v1, it is \"application/fhir+json\"\n  5. checksum is Md5 checksum of the data conent, before encryption\n  6. Please refer to the NDHM Sandbox documentation for the format of FHIR bundle that is passed through content \n",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/v0.5/health-information/transfer"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "POST /v0.5/health-information/hiu/on-request",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Hiu On Request"
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
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Hiu On Request"
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
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Hiu On Request"
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
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Hiu On Request"
					]
				}
			}
		},
		{
			"displayName": "Hi Request",
			"name": "hiRequest",
			"type": "json",
			"default": "{\n  \"transactionId\": \"a1s2c932-2f70-3ds3-a3b5-2sfd46b12a18d\"\n}",
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
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Hiu On Request"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Request Id",
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
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Hiu On Request"
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
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Hiu On Request"
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
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Hiu On Request"
					]
				}
			}
		},
		{
			"displayName": "POST /v0.5/health-information/transfer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Transfer"
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
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Transfer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Entries",
			"name": "entries",
			"type": "json",
			"default": "[\n  {\n    \"careContextReference\": \"RVH1008\",\n    \"content\": \"Encrypted content of data packaged in FHIR bundle\"\n  }\n]",
			"routing": {
				"send": {
					"property": "entries",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Transfer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Key Material",
			"name": "keyMaterial",
			"type": "json",
			"default": "{\n  \"cryptoAlg\": \"ECDH\",\n  \"curve\": \"Curve25519\",\n  \"dhPublicKey\": {\n    \"parameters\": \"Curve25519/32byte random key\"\n  },\n  \"nonce\": \"3fa85f64-5717-4562-b3fc-2c963f66afa6\"\n}",
			"routing": {
				"send": {
					"property": "keyMaterial",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Transfer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Page Count",
			"name": "pageCount",
			"type": "number",
			"default": 0,
			"description": "Total number of pages.",
			"routing": {
				"send": {
					"property": "pageCount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Transfer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Page Number",
			"name": "pageNumber",
			"type": "number",
			"default": 0,
			"description": "Current page number.",
			"routing": {
				"send": {
					"property": "pageNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Transfer"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Transaction Id",
			"name": "transactionId",
			"type": "string",
			"default": "",
			"description": "Transaction Id issued when data requested.",
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
						"Data Flow"
					],
					"operation": [
						"POST V 0 5 Health Information Transfer"
					]
				}
			}
		},
];
