import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { userAuthDescription } from './resources/user-auth';
import { identificationDescription } from './resources/identification';
import { consentFlowDescription } from './resources/consent-flow';
import { dataFlowDescription } from './resources/data-flow';
import { subscriptionsDescription } from './resources/subscriptions';
import { monitoringDescription } from './resources/monitoring';
import { gatewayDescription } from './resources/gateway';

export class NdhmGovNdhmHiu implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'ndhm-gov-ndhm-hiu',
		name: 'N8nDevNdhmGovNdhmHiu',
		icon: { light: 'file:./ndhm-gov-ndhm-hiu.svg', dark: 'file:./ndhm-gov-ndhm-hiu.dark.svg' },
		group: ['input'],
		version: 1,
		subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
		description: 'Following are the specifications for the APIs to be implemented at the Health Repository end if an entity is only serving the role of a HIU. The specs are essentially duplicates from the Gatewa..',
		defaults: { name: 'ndhm-gov-ndhm-hiu' },
		usableAsTool: true,
		inputs: [NodeConnectionTypes.Main],
		outputs: [NodeConnectionTypes.Main],
		credentials: [
			{
				name: 'N8nDevNdhmGovNdhmHiuApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{\$credentials.url}}',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "User Auth",
					"value": "User Auth",
					"description": ""
				},
				{
					"name": "Identification",
					"value": "Identification",
					"description": ""
				},
				{
					"name": "Consent Flow",
					"value": "Consent Flow",
					"description": ""
				},
				{
					"name": "Data Flow",
					"value": "Data Flow",
					"description": ""
				},
				{
					"name": "Subscriptions",
					"value": "Subscriptions",
					"description": ""
				},
				{
					"name": "Monitoring",
					"value": "Monitoring",
					"description": ""
				},
				{
					"name": "Gateway",
					"value": "Gateway",
					"description": ""
				}
			],
			"default": ""
		},
		...userAuthDescription,
		...identificationDescription,
		...consentFlowDescription,
		...dataFlowDescription,
		...subscriptionsDescription,
		...monitoringDescription,
		...gatewayDescription
		],
	};
}
