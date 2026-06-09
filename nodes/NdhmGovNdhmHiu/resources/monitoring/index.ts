import type { INodeProperties } from 'n8n-workflow';

export const monitoringDescription: INodeProperties[] = [
		{
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring"
					]
				}
			},
			"options": [
				{
					"name": "GET V 0 5 Heartbeat",
					"value": "GET V 0 5 Heartbeat",
					"action": "Get consent request status",
					"description": "Get consent request status",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/v0.5/heartbeat"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /v0.5/heartbeat",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Monitoring"
					],
					"operation": [
						"GET V 0 5 Heartbeat"
					]
				}
			}
		},
];
