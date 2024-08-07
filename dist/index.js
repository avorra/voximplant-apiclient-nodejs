"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const TypeTransformer_1 = require("./TypeTransformer");
const jwt = require("jsonwebtoken");
const axios_1 = require("axios");
const FormData = require("form-data");
class VoximplantApiClient {
    constructor(key, host) {
        this.host = host;
        this.Accounts = {
            /**
             * Gets the account's info such as account_id, account_name, account_email etc.
             */
            getAccountInfo: (request) => {
                const reqMapper = [
                    {
                        rawName: 'return_live_balance',
                        name: 'returnLiveBalance',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('AccountInfoType') },
                    { rawName: 'api_address', name: 'apiAddress', transformer: TypeTransformer_1.default.from('string') },
                ];
                return this.makeRequest('GetAccountInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the account's profile.
             */
            setAccountInfo: (request) => {
                const reqMapper = [
                    {
                        rawName: 'new_account_email',
                        name: 'newAccountEmail',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_account_password',
                        name: 'newAccountPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'language_code',
                        name: 'languageCode',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'location', name: 'location', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'account_first_name',
                        name: 'accountFirstName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'account_last_name',
                        name: 'accountLastName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'min_balance_to_notify',
                        name: 'minBalanceToNotify',
                        transformer: TypeTransformer_1.default.to('decimal'),
                    },
                    {
                        rawName: 'account_notifications',
                        name: 'accountNotifications',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'tariff_changing_notifications',
                        name: 'tariffChangingNotifications',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'news_notifications',
                        name: 'newsNotifications',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'send_js_error',
                        name: 'sendJsError',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'billing_address_name',
                        name: 'billingAddressName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'billing_address_country_code',
                        name: 'billingAddressCountryCode',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'billing_address_address',
                        name: 'billingAddressAddress',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'billing_address_zip',
                        name: 'billingAddressZip',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'billing_address_phone',
                        name: 'billingAddressPhone',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'account_custom_data',
                        name: 'accountCustomData',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'callback_url', name: 'callbackUrl', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'callback_salt',
                        name: 'callbackSalt',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'store_outbound_sms',
                        name: 'storeOutboundSms',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'store_inbound_sms',
                        name: 'storeInboundSms',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetAccountInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the account's profile.
             */
            setChildAccountInfo: (request) => {
                const reqMapper = [
                    {
                        rawName: 'child_account_id',
                        name: 'childAccountId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'child_account_name',
                        name: 'childAccountName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'child_account_email',
                        name: 'childAccountEmail',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'new_child_account_email',
                        name: 'newChildAccountEmail',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_child_account_password',
                        name: 'newChildAccountPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'account_notifications',
                        name: 'accountNotifications',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'tariff_changing_notifications',
                        name: 'tariffChangingNotifications',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'news_notifications',
                        name: 'newsNotifications',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'active', name: 'active', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'language_code',
                        name: 'languageCode',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'location', name: 'location', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'min_balance_to_notify',
                        name: 'minBalanceToNotify',
                        transformer: TypeTransformer_1.default.to('decimal'),
                    },
                    {
                        rawName: 'support_robokassa',
                        name: 'supportRobokassa',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'support_bank_card',
                        name: 'supportBankCard',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'support_invoice',
                        name: 'supportInvoice',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'can_use_restricted',
                        name: 'canUseRestricted',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetChildAccountInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the exchange rate on selected date (per USD).
             */
            getCurrencyRate: (request) => {
                const reqMapper = [
                    { rawName: 'currency', name: 'currency', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'date', name: 'date', transformer: TypeTransformer_1.default.to('date') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('ExchangeRates') },
                ];
                return this.makeRequest('GetCurrencyRate', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the resource price.
             */
            getResourcePrice: (request) => {
                const reqMapper = [
                    {
                        rawName: 'resource_type',
                        name: 'resourceType',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'price_group_id',
                        name: 'priceGroupId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'price_group_name',
                        name: 'priceGroupName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'resource_param',
                        name: 'resourceParam',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[ResourcePrice]') },
                ];
                return this.makeRequest('GetResourcePrice', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the subscription template price.
             */
            getSubscriptionPrice: (request) => {
                const reqMapper = [
                    {
                        rawName: 'subscription_template_id',
                        name: 'subscriptionTemplateId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'subscription_template_type',
                        name: 'subscriptionTemplateType',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'subscription_template_name',
                        name: 'subscriptionTemplateName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[SubscriptionTemplateType]'),
                    },
                ];
                return this.makeRequest('GetSubscriptionPrice', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the info about all children accounts.
             */
            getChildrenAccounts: (request) => {
                const reqMapper = [
                    {
                        rawName: 'child_account_id',
                        name: 'childAccountId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'child_account_name',
                        name: 'childAccountName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'child_account_email',
                        name: 'childAccountEmail',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'active', name: 'active', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'frozen', name: 'frozen', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'ignore_invalid_accounts',
                        name: 'ignoreInvalidAccounts',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'brief_output',
                        name: 'briefOutput',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'medium_output',
                        name: 'mediumOutput',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'order_by', name: 'orderBy', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'return_live_balance',
                        name: 'returnLiveBalance',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[AccountInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetChildrenAccounts', request, [reqMapper, respMapper]);
            },
            /**
             * Get the recommended money amount to charge.
             */
            getMoneyAmountToCharge: (request) => {
                const reqMapper = [
                    { rawName: 'currency', name: 'currency', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'charge_date', name: 'chargeDate', transformer: TypeTransformer_1.default.to('date') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('GetMoneyAmountToChargeResult'),
                    },
                ];
                return this.makeRequest('GetMoneyAmountToCharge', request, [reqMapper, respMapper]);
            },
            /**
             * Charges the account in the manual mode. You should call the ChargeAccount function to charge the subscriptions having the auto_charge=false.
             */
            chargeAccount: (request) => {
                const reqMapper = [
                    { rawName: 'phone_id', name: 'phoneId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'phone_number',
                        name: 'phoneNumber',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('ChargeAccountResult'),
                    },
                    {
                        rawName: 'account_info',
                        name: 'accountInfo',
                        transformer: TypeTransformer_1.default.from('ShortAccountInfoType'),
                    },
                ];
                return this.makeRequest('ChargeAccount', request, [reqMapper, respMapper]);
            },
            /**
             * Configures the account's plan.<br><br>Please note that when you change the billing plan, we reserve the subscription fee and taxes for the upcoming month. Read more in the <a href='/docs/gettingstarted/billing'>Billing</a> page.
             */
            changeAccountPlan: (request) => {
                const reqMapper = [
                    { rawName: 'plan_type', name: 'planType', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'plan_subscription_template_id',
                        name: 'planSubscriptionTemplateId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'account_info',
                        name: 'accountInfo',
                        transformer: TypeTransformer_1.default.from('ShortAccountInfoType'),
                    },
                ];
                return this.makeRequest('ChangeAccountPlan', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the account plans with packages.
             */
            getAccountPlans: (request) => {
                const reqMapper = [
                    { rawName: 'plan_type', name: 'planType', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'plan_subscription_template_id',
                        name: 'planSubscriptionTemplateId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[AccountPlanType]'),
                    },
                ];
                return this.makeRequest('GetAccountPlans', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the allowed plans to change.
             */
            getAvailablePlans: (request) => {
                const reqMapper = [
                    { rawName: 'plan_type', name: 'planType', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'plan_subscription_template_id',
                        name: 'planSubscriptionTemplateId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[PlanType]') },
                ];
                return this.makeRequest('GetAvailablePlans', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the account documents and the verification states.
             */
            getAccountDocuments: (request) => {
                const reqMapper = [
                    {
                        rawName: 'with_details',
                        name: 'withDetails',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'verification_name',
                        name: 'verificationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'verification_status',
                        name: 'verificationStatus',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'from_unverified_hold_until',
                        name: 'fromUnverifiedHoldUntil',
                        transformer: TypeTransformer_1.default.to('date'),
                    },
                    {
                        rawName: 'to_unverified_hold_until',
                        name: 'toUnverifiedHoldUntil',
                        transformer: TypeTransformer_1.default.to('date'),
                    },
                    {
                        rawName: 'child_account_id',
                        name: 'childAccountId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'children_verifications_only',
                        name: 'childrenVerificationsOnly',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[AccountVerifications]'),
                    },
                ];
                return this.makeRequest('GetAccountDocuments', request, [reqMapper, respMapper]);
            },
        };
        this.Applications = {
            /**
             * Adds a new account's application.
             */
            addApplication: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'secure_record_storage',
                        name: 'secureRecordStorage',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.from('string'),
                    },
                    {
                        rawName: 'secure_record_storage',
                        name: 'secureRecordStorage',
                        transformer: TypeTransformer_1.default.from('boolean'),
                    },
                ];
                return this.makeRequest('AddApplication', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the account's application.
             */
            delApplication: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelApplication', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the account's application.
             */
            setApplicationInfo: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'required_application_name',
                        name: 'requiredApplicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'secure_record_storage',
                        name: 'secureRecordStorage',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.from('string'),
                    },
                    {
                        rawName: 'secure_record_storage',
                        name: 'secureRecordStorage',
                        transformer: TypeTransformer_1.default.from('boolean'),
                    },
                ];
                return this.makeRequest('SetApplicationInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the account's applications.
             */
            getApplications: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'with_rules', name: 'withRules', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'with_scenarios',
                        name: 'withScenarios',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[ApplicationInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetApplications', request, [reqMapper, respMapper]);
            },
        };
        this.Users = {
            /**
             * Adds a new user.
             */
            addUser: (request) => {
                const reqMapper = [
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'user_display_name',
                        name: 'userDisplayName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'user_password',
                        name: 'userPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'parent_accounting',
                        name: 'parentAccounting',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'user_active', name: 'userActive', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'user_custom_data',
                        name: 'userCustomData',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('AddUser', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the specified user(s).
             */
            delUser: (request) => {
                const reqMapper = [
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelUser', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the user.
             */
            setUserInfo: (request) => {
                const reqMapper = [
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_user_name',
                        name: 'newUserName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'user_display_name',
                        name: 'userDisplayName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'user_password',
                        name: 'userPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'parent_accounting',
                        name: 'parentAccounting',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'user_active', name: 'userActive', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'user_custom_data',
                        name: 'userCustomData',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetUserInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Shows the users of the specified account.
             */
            getUsers: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'skill_id', name: 'skillId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'excluded_skill_id',
                        name: 'excludedSkillId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'acd_queue_id', name: 'acdQueueId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'excluded_acd_queue_id',
                        name: 'excludedAcdQueueId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'user_active', name: 'userActive', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'user_display_name',
                        name: 'userDisplayName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'with_skills', name: 'withSkills', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'with_queues', name: 'withQueues', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'acd_status', name: 'acdStatus', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'showing_skill_id',
                        name: 'showingSkillId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'order_by', name: 'orderBy', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'return_live_balance',
                        name: 'returnLiveBalance',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[UserInfoType]') },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetUsers', request, [reqMapper, respMapper]);
            },
            /**
             * Transfer the account's money to the user or transfer the user's money to the account if the money amount is negative.
             */
            transferMoneyToUser: (request) => {
                const reqMapper = [
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'amount', name: 'amount', transformer: TypeTransformer_1.default.to('decimal') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'currency', name: 'currency', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'strict_mode', name: 'strictMode', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'user_transaction_description',
                        name: 'userTransactionDescription',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'account_transaction_description',
                        name: 'accountTransactionDescription',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'balance', name: 'balance', transformer: TypeTransformer_1.default.from('decimal') },
                ];
                return this.makeRequest('TransferMoneyToUser', request, [reqMapper, respMapper]);
            },
        };
        this.CallLists = {
            /**
             * Adds a new CSV file for call list processing and starts the specified rule immediately. To send a file, use the request body. To set the call time constraints, use the following options in a CSV file: <ul><li>**__start_execution_time** – when the call list processing starts every day, UTC+0 24-h format: HH:mm:ss</li><li>**__end_execution_time** – when the call list processing stops every day,  UTC+0 24-h format: HH:mm:ss</li><li>**__start_at** – when the call list processing starts, UNIX timestamp. If not specified, the processing starts immediately after a method call</li><li>**__task_uuid** – call list UUID. A string up to 40 characters, can contain latin letters, digits, hyphens (-) and colons (:). Unique within the call list</li></ul><br>This method accepts CSV files with custom delimiters, such a commas (,), semicolons (;) and other. To specify a delimiter, pass it to the <b>delimiter</b> parameter.<br/><b>IMPORTANT:</b> the account's balance should be equal or greater than 1 USD. If the balance is lower than 1 USD, the call list processing does not start, or it stops immediately if it is active.
             */
            createCallList: (request) => {
                const reqMapper = [
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'priority', name: 'priority', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'max_simultaneous',
                        name: 'maxSimultaneous',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'num_attempts', name: 'numAttempts', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'name', name: 'name', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'file_content', name: 'fileContent', transformer: TypeTransformer_1.default.to('file') },
                    {
                        rawName: 'interval_seconds',
                        name: 'intervalSeconds',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'encoding', name: 'encoding', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'delimiter', name: 'delimiter', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'escape', name: 'escape', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'reference_ip', name: 'referenceIp', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'server_location',
                        name: 'serverLocation',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('boolean') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'list_id', name: 'listId', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('CreateCallList', request, [reqMapper, respMapper]);
            },
            /**
             * Get all call lists for the specified user.
             */
            getCallLists: (request) => {
                const reqMapper = [
                    { rawName: 'list_id', name: 'listId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'name', name: 'name', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'is_active', name: 'isActive', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'type_list', name: 'typeList', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[CallListType]') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetCallLists', request, [reqMapper, respMapper]);
            },
            /**
             * Get details of the specified call list. Returns a CSV file by default.
             */
            getCallListDetails: (request) => {
                const reqMapper = [
                    { rawName: 'list_id', name: 'listId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'output', name: 'output', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'encoding', name: 'encoding', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'delimiter', name: 'delimiter', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[CallListDetailType]'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetCallListDetails', request, [reqMapper, respMapper]);
            },
            /**
             * Stop processing the specified call list.
             */
            stopCallListProcessing: (request) => {
                const reqMapper = [
                    { rawName: 'list_id', name: 'listId', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('boolean') },
                    { rawName: 'msg', name: 'msg', transformer: TypeTransformer_1.default.from('string') },
                ];
                return this.makeRequest('StopCallListProcessing', request, [reqMapper, respMapper]);
            },
            /**
             * Resume processing the specified call list.
             */
            recoverCallList: (request) => {
                const reqMapper = [
                    { rawName: 'list_id', name: 'listId', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('boolean') },
                    {
                        rawName: 'count_recovery',
                        name: 'countRecovery',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('RecoverCallList', request, [reqMapper, respMapper]);
            },
        };
        this.Scenarios = {
            /**
             * Adds a new scenario to the <a href="https://voximplant.com/docs/gettingstarted/basicconcepts/scenarios#shared-scenarios">Shared</a> folder, so the scenario is available in all the existing applications. Please use the POST method.
             */
            addScenario: (request) => {
                const reqMapper = [
                    {
                        rawName: 'scenario_name',
                        name: 'scenarioName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'scenario_script',
                        name: 'scenarioScript',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'rewrite', name: 'rewrite', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'scenario_id', name: 'scenarioId', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('AddScenario', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the scenario.
             */
            delScenario: (request) => {
                const reqMapper = [
                    { rawName: 'scenario_id', name: 'scenarioId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'scenario_name',
                        name: 'scenarioName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelScenario', request, [reqMapper, respMapper]);
            },
            /**
             * Bind the scenario list to the rule. You should specify the application_id or application_name if you specify the rule_name. Please note, the scenario and the routing rule need to be within the same application.
             */
            bindScenario: (request) => {
                const reqMapper = [
                    { rawName: 'scenario_id', name: 'scenarioId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'scenario_name',
                        name: 'scenarioName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'bind', name: 'bind', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('BindScenario', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the account's scenarios.
             */
            getScenarios: (request) => {
                const reqMapper = [
                    { rawName: 'scenario_id', name: 'scenarioId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'scenario_name',
                        name: 'scenarioName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'with_script', name: 'withScript', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[ScenarioInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetScenarios', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the scenario. You can edit the scenario's name and body. Please use the POST method.
             */
            setScenarioInfo: (request) => {
                const reqMapper = [
                    { rawName: 'scenario_id', name: 'scenarioId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'required_scenario_name',
                        name: 'requiredScenarioName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'scenario_name',
                        name: 'scenarioName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'scenario_script',
                        name: 'scenarioScript',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetScenarioInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Configures the order of scenarios that are assigned to the specified rule.
             */
            reorderScenarios: (request) => {
                const reqMapper = [
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'scenario_id', name: 'scenarioId', transformer: TypeTransformer_1.default.to('intlist') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('ReorderScenarios', request, [reqMapper, respMapper]);
            },
            /**
             * Runs JavaScript scenarios on a Voximplant server. The scenarios run in a new media session. To start a scenario, pass the routing rule ID associated with the necessary scenario. You can use both GET and POST requests, but we recommend using the POST mode if you pass some data in the custom_data field. The maximum number of simultaneous requests is 200. If you exceed this number, you get the 429 error code.
             */
            startScenarios: (request) => {
                const reqMapper = [
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'script_custom_data',
                        name: 'scriptCustomData',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'reference_ip', name: 'referenceIp', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'server_location',
                        name: 'serverLocation',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'media_session_access_url',
                        name: 'mediaSessionAccessUrl',
                        transformer: TypeTransformer_1.default.from('string'),
                    },
                    {
                        rawName: 'media_session_access_secure_url',
                        name: 'mediaSessionAccessSecureUrl',
                        transformer: TypeTransformer_1.default.from('string'),
                    },
                    {
                        rawName: 'call_session_history_id',
                        name: 'callSessionHistoryId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('StartScenarios', request, [reqMapper, respMapper]);
            },
            /**
             * Runs a session for video conferencing or joins the existing video conference session.<br/><br/>When you create a session by calling this method, a scenario runs on one of the servers dedicated to video conferencing. All further method calls with the same **conference_name** do not create a new video conference session but join the existing one.<br/><br/>Use the [StartScenarios] method for creating audio conferences.
             */
            startConference: (request) => {
                const reqMapper = [
                    {
                        rawName: 'conference_name',
                        name: 'conferenceName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'script_custom_data',
                        name: 'scriptCustomData',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'reference_ip', name: 'referenceIp', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'server_location',
                        name: 'serverLocation',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'media_session_access_url',
                        name: 'mediaSessionAccessUrl',
                        transformer: TypeTransformer_1.default.from('string'),
                    },
                    {
                        rawName: 'media_session_access_secure_url',
                        name: 'mediaSessionAccessSecureUrl',
                        transformer: TypeTransformer_1.default.from('string'),
                    },
                    {
                        rawName: 'call_session_history_id',
                        name: 'callSessionHistoryId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('StartConference', request, [reqMapper, respMapper]);
            },
        };
        this.Rules = {
            /**
             * Adds a new rule for the application.
             */
            addRule: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'rule_pattern', name: 'rulePattern', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'scenario_id', name: 'scenarioId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'scenario_name',
                        name: 'scenarioName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'rule_pattern_exclude',
                        name: 'rulePatternExclude',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'video_conference',
                        name: 'videoConference',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'bind_key_id', name: 'bindKeyId', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('AddRule', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the rule.
             */
            delRule: (request) => {
                const reqMapper = [
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelRule', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the rule.
             */
            setRuleInfo: (request) => {
                const reqMapper = [
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'rule_pattern', name: 'rulePattern', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'rule_pattern_exclude',
                        name: 'rulePatternExclude',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'video_conference',
                        name: 'videoConference',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'bind_key_id', name: 'bindKeyId', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetRuleInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the rules.
             */
            getRules: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'video_conference',
                        name: 'videoConference',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'attached_key_id',
                        name: 'attachedKeyId',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'template', name: 'template', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'with_scenarios',
                        name: 'withScenarios',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[RuleInfoType]') },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetRules', request, [reqMapper, respMapper]);
            },
            /**
             * Configures the rules' order in the <a href='//manage.voximplant.com/applications'>Applications</a> section of Control panel. Note: the rules must belong to the same application!
             */
            reorderRules: (request) => {
                const reqMapper = [
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('intlist') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('ReorderRules', request, [reqMapper, respMapper]);
            },
        };
        this.History = {
            /**
             * Gets the account's call history, including call duration, cost, logs and other call information. You can filter the call history by a certain date
             */
            getCallHistory: (request) => {
                const reqMapper = [
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    {
                        rawName: 'call_session_history_id',
                        name: 'callSessionHistoryId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'remote_number',
                        name: 'remoteNumber',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'local_number',
                        name: 'localNumber',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'call_session_history_custom_data',
                        name: 'callSessionHistoryCustomData',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'with_calls', name: 'withCalls', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'with_records',
                        name: 'withRecords',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'with_other_resources',
                        name: 'withOtherResources',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'child_account_id',
                        name: 'childAccountId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'children_calls_only',
                        name: 'childrenCallsOnly',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'with_header', name: 'withHeader', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'desc_order', name: 'descOrder', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'with_total_count',
                        name: 'withTotalCount',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'output', name: 'output', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'is_async', name: 'isAsync', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[CallSessionInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'timezone', name: 'timezone', transformer: TypeTransformer_1.default.from('string') },
                    {
                        rawName: 'history_report_id',
                        name: 'historyReportId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('GetCallHistory', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the account's brief call history. Use the [GetHistoryReports], [DownloadHistoryReport] methods to download the report.
             */
            getBriefCallHistory: (request) => {
                const reqMapper = [
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'output', name: 'output', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'is_async', name: 'isAsync', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'call_session_history_id',
                        name: 'callSessionHistoryId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'remote_number',
                        name: 'remoteNumber',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'local_number',
                        name: 'localNumber',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'call_session_history_custom_data',
                        name: 'callSessionHistoryCustomData',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'with_header', name: 'withHeader', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'desc_order', name: 'descOrder', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'history_report_id',
                        name: 'historyReportId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('GetBriefCallHistory', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the list of history reports and their statuses. The method returns info about reports made via [GetCallHistory] with the specified __output=csv__ and **is_async=true** parameters. Note that the **file_size** field in response is valid only for video calls.
             */
            getHistoryReports: (request) => {
                const reqMapper = [
                    {
                        rawName: 'history_report_id',
                        name: 'historyReportId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'history_type',
                        name: 'historyType',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'created_from',
                        name: 'createdFrom',
                        transformer: TypeTransformer_1.default.to('timestamp'),
                    },
                    { rawName: 'created_to', name: 'createdTo', transformer: TypeTransformer_1.default.to('timestamp') },
                    {
                        rawName: 'is_completed',
                        name: 'isCompleted',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'desc_order', name: 'descOrder', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[HistoryReportType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetHistoryReports', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the transaction history.
             */
            getTransactionHistory: (request) => {
                const reqMapper = [
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    {
                        rawName: 'transaction_id',
                        name: 'transactionId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'transaction_type',
                        name: 'transactionType',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'child_account_id',
                        name: 'childAccountId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'children_transactions_only',
                        name: 'childrenTransactionsOnly',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'users_transactions_only',
                        name: 'usersTransactionsOnly',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'desc_order', name: 'descOrder', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'output', name: 'output', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'is_async', name: 'isAsync', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'is_uncommitted',
                        name: 'isUncommitted',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[TransactionInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'timezone', name: 'timezone', transformer: TypeTransformer_1.default.from('string') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'history_report_id',
                        name: 'historyReportId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('GetTransactionHistory', request, [reqMapper, respMapper]);
            },
            /**
             * Try to remove a record and transcription files.
             */
            deleteRecord: (request) => {
                const reqMapper = [
                    { rawName: 'record_url', name: 'recordUrl', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'record_id', name: 'recordId', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DeleteRecord', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the ACD history.
             */
            getACDHistory: (request) => {
                const reqMapper = [
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    {
                        rawName: 'acd_session_history_id',
                        name: 'acdSessionHistoryId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'acd_request_id',
                        name: 'acdRequestId',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'acd_queue_id', name: 'acdQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'operator_hangup',
                        name: 'operatorHangup',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'unserviced', name: 'unserviced', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'min_waiting_time',
                        name: 'minWaitingTime',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'rejected', name: 'rejected', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'with_events', name: 'withEvents', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'with_header', name: 'withHeader', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'desc_order', name: 'descOrder', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'output', name: 'output', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[ACDSessionInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetACDHistory', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the history of account changes.
             */
            getAuditLog: (request) => {
                const reqMapper = [
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'audit_log_id', name: 'auditLogId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'filtered_admin_user_id',
                        name: 'filteredAdminUserId',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'filtered_ip',
                        name: 'filteredIp',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'filtered_cmd',
                        name: 'filteredCmd',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'advanced_filters',
                        name: 'advancedFilters',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'with_header', name: 'withHeader', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'desc_order', name: 'descOrder', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'with_total_count',
                        name: 'withTotalCount',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'output', name: 'output', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'is_async', name: 'isAsync', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[AuditLogInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'timezone', name: 'timezone', transformer: TypeTransformer_1.default.from('string') },
                    {
                        rawName: 'history_report_id',
                        name: 'historyReportId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('GetAuditLog', request, [reqMapper, respMapper]);
            },
        };
        this.PSTNBlacklist = {
            /**
             * Add a new phone number to the PSTN blacklist. Use blacklist to block incoming calls from specified phone numbers to numbers purchased from Voximplant. Since we have no control over exact phone number format for calls from SIP integrations, blacklisting such numbers should be done via JavaScript scenarios.
             */
            addPstnBlackListItem: (request) => {
                const reqMapper = [
                    {
                        rawName: 'pstn_blacklist_phone',
                        name: 'pstnBlacklistPhone',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'pstn_blacklist_id',
                        name: 'pstnBlacklistId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('AddPstnBlackListItem', request, [reqMapper, respMapper]);
            },
            /**
             * Update the PSTN blacklist item. BlackList works for numbers that are purchased from Voximplant only. Since we have no control over exact phone number format for calls from SIP integrations, blacklisting such numbers should be done via JavaScript scenarios.
             */
            setPstnBlackListItem: (request) => {
                const reqMapper = [
                    {
                        rawName: 'pstn_blacklist_id',
                        name: 'pstnBlacklistId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'pstn_blacklist_phone',
                        name: 'pstnBlacklistPhone',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetPstnBlackListItem', request, [reqMapper, respMapper]);
            },
            /**
             * Remove phone number from the PSTN blacklist.
             */
            delPstnBlackListItem: (request) => {
                const reqMapper = [
                    {
                        rawName: 'pstn_blacklist_id',
                        name: 'pstnBlacklistId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelPstnBlackListItem', request, [reqMapper, respMapper]);
            },
            /**
             * Get the whole PSTN blacklist.
             */
            getPstnBlackList: (request) => {
                const reqMapper = [
                    {
                        rawName: 'pstn_blacklist_id',
                        name: 'pstnBlacklistId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'pstn_blacklist_phone',
                        name: 'pstnBlacklistPhone',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[PstnBlackListInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetPstnBlackList', request, [reqMapper, respMapper]);
            },
        };
        this.SIPWhiteList = {
            /**
             * Adds a new network address to the SIP white list.
             */
            addSipWhiteListItem: (request) => {
                const reqMapper = [
                    {
                        rawName: 'sip_whitelist_network',
                        name: 'sipWhitelistNetwork',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'sip_whitelist_id',
                        name: 'sipWhitelistId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('AddSipWhiteListItem', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the network address from the SIP white list.
             */
            delSipWhiteListItem: (request) => {
                const reqMapper = [
                    {
                        rawName: 'sip_whitelist_id',
                        name: 'sipWhitelistId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelSipWhiteListItem', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the SIP white list.
             */
            setSipWhiteListItem: (request) => {
                const reqMapper = [
                    {
                        rawName: 'sip_whitelist_id',
                        name: 'sipWhitelistId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'sip_whitelist_network',
                        name: 'sipWhitelistNetwork',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetSipWhiteListItem', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the SIP white list.
             */
            getSipWhiteList: (request) => {
                const reqMapper = [
                    {
                        rawName: 'sip_whitelist_id',
                        name: 'sipWhitelistId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[SipWhiteListInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetSipWhiteList', request, [reqMapper, respMapper]);
            },
        };
        this.SIPRegistration = {
            /**
             * Create a new SIP registration. You should specify the application_id or application_name if you specify the rule_name or user_id, or user_name. You should set is_persistent=true if you specify the user_id or user_name. You can bind only one SIP registration to the user (the previous SIP registration are automatically unbound).<br><br>Please note that when you create a SIP registration, we reserve the subscription fee and taxes for the upcoming month. Read more in the <a href='/docs/gettingstarted/billing'>Billing</a> page.
             */
            createSipRegistration: (request) => {
                const reqMapper = [
                    { rawName: 'sip_username', name: 'sipUsername', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'proxy', name: 'proxy', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'auth_user', name: 'authUser', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'outbound_proxy',
                        name: 'outboundProxy',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'password', name: 'password', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'is_persistent',
                        name: 'isPersistent',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'sip_registration_id',
                        name: 'sipRegistrationId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                    {
                        rawName: 'account_info',
                        name: 'accountInfo',
                        transformer: TypeTransformer_1.default.from('ShortAccountInfoType'),
                    },
                ];
                return this.makeRequest('CreateSipRegistration', request, [reqMapper, respMapper]);
            },
            /**
             * Update SIP registration. You should specify the application_id or application_name if you specify the rule_name or user_id, or user_name. You can bind only one SIP registration to the user (the previous SIP registration is automatically unbound).
             */
            updateSipRegistration: (request) => {
                const reqMapper = [
                    {
                        rawName: 'sip_registration_id',
                        name: 'sipRegistrationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'sip_username', name: 'sipUsername', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'proxy', name: 'proxy', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'auth_user', name: 'authUser', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'outbound_proxy',
                        name: 'outboundProxy',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'password', name: 'password', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('UpdateSipRegistration', request, [reqMapper, respMapper]);
            },
            /**
             * Bind the SIP registration to the application/user or unbind the SIP registration from the application/user. You should specify the application_id or application_name if you specify the rule_name or user_id, or user_name. You should specify the sip_registration_id if you set bind=true. You can bind only one SIP registration to the user (the previous SIP registration is automatically unbound).
             */
            bindSipRegistration: (request) => {
                const reqMapper = [
                    {
                        rawName: 'sip_registration_id',
                        name: 'sipRegistrationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'bind', name: 'bind', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('BindSipRegistration', request, [reqMapper, respMapper]);
            },
            /**
             * Delete SIP registration.
             */
            deleteSipRegistration: (request) => {
                const reqMapper = [
                    {
                        rawName: 'sip_registration_id',
                        name: 'sipRegistrationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DeleteSipRegistration', request, [reqMapper, respMapper]);
            },
            /**
             * Get active SIP registrations.
             */
            getSipRegistrations: (request) => {
                const reqMapper = [
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'sip_registration_id',
                        name: 'sipRegistrationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'sip_username', name: 'sipUsername', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'deactivated', name: 'deactivated', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'successful', name: 'successful', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'is_persistent',
                        name: 'isPersistent',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'is_bound_to_application',
                        name: 'isBoundToApplication',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'proxy', name: 'proxy', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'in_progress', name: 'inProgress', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'status_code', name: 'statusCode', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[SIPRegistrationType]'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetSipRegistrations', request, [reqMapper, respMapper]);
            },
        };
        this.PhoneNumbers = {
            /**
             * Attach the phone number to the account. Note that phone numbers of some countries may require additional verification steps.<br><br>Please note that when you purchase a phone number, we reserve the subscription fee and taxes for the upcoming month. Read more in the <a href='/docs/gettingstarted/billing'>Billing</a> page.
             */
            attachPhoneNumber: (request) => {
                const reqMapper = [
                    { rawName: 'phone_count', name: 'phoneCount', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'phone_number',
                        name: 'phoneNumber',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'country_code', name: 'countryCode', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'phone_category_name',
                        name: 'phoneCategoryName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'phone_region_id',
                        name: 'phoneRegionId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'country_state',
                        name: 'countryState',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'regulation_address_id',
                        name: 'regulationAddressId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'phone_numbers',
                        name: 'phoneNumbers',
                        transformer: TypeTransformer_1.default.from('[NewAttachedPhoneInfoType]'),
                    },
                ];
                return this.makeRequest('AttachPhoneNumber', request, [reqMapper, respMapper]);
            },
            /**
             * Bind the phone number to the application or unbind the phone number from the application. You should specify the application_id or application_name if you specify the rule_name.
             */
            bindPhoneNumberToApplication: (request) => {
                const reqMapper = [
                    { rawName: 'phone_id', name: 'phoneId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'phone_number',
                        name: 'phoneNumber',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'bind', name: 'bind', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('BindPhoneNumberToApplication', request, [reqMapper, respMapper]);
            },
            /**
             * Deactivates the phone number.
             */
            deactivatePhoneNumber: (request) => {
                const reqMapper = [
                    { rawName: 'phone_id', name: 'phoneId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'phone_number',
                        name: 'phoneNumber',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DeactivatePhoneNumber', request, [reqMapper, respMapper]);
            },
            /**
             * Set the phone number information.
             */
            setPhoneNumberInfo: (request) => {
                const reqMapper = [
                    { rawName: 'phone_id', name: 'phoneId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'phone_number',
                        name: 'phoneNumber',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'incoming_sms_callback_url',
                        name: 'incomingSmsCallbackUrl',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetPhoneNumberInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the account phone numbers.
             */
            getPhoneNumbers: (request) => {
                const reqMapper = [
                    { rawName: 'phone_id', name: 'phoneId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'phone_number',
                        name: 'phoneNumber',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'is_bound_to_application',
                        name: 'isBoundToApplication',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'phone_template',
                        name: 'phoneTemplate',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'country_code',
                        name: 'countryCode',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'phone_category_name',
                        name: 'phoneCategoryName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'canceled', name: 'canceled', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'deactivated', name: 'deactivated', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'auto_charge', name: 'autoCharge', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'from_phone_next_renewal',
                        name: 'fromPhoneNextRenewal',
                        transformer: TypeTransformer_1.default.to('date'),
                    },
                    {
                        rawName: 'to_phone_next_renewal',
                        name: 'toPhoneNextRenewal',
                        transformer: TypeTransformer_1.default.to('date'),
                    },
                    {
                        rawName: 'from_phone_purchase_date',
                        name: 'fromPhonePurchaseDate',
                        transformer: TypeTransformer_1.default.to('timestamp'),
                    },
                    {
                        rawName: 'to_phone_purchase_date',
                        name: 'toPhonePurchaseDate',
                        transformer: TypeTransformer_1.default.to('timestamp'),
                    },
                    {
                        rawName: 'child_account_id',
                        name: 'childAccountId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'children_phones_only',
                        name: 'childrenPhonesOnly',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'verification_name',
                        name: 'verificationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'verification_status',
                        name: 'verificationStatus',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'from_unverified_hold_until',
                        name: 'fromUnverifiedHoldUntil',
                        transformer: TypeTransformer_1.default.to('date'),
                    },
                    {
                        rawName: 'to_unverified_hold_until',
                        name: 'toUnverifiedHoldUntil',
                        transformer: TypeTransformer_1.default.to('date'),
                    },
                    { rawName: 'can_be_used', name: 'canBeUsed', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'order_by', name: 'orderBy', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'sandbox', name: 'sandbox', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'phone_region_name',
                        name: 'phoneRegionName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'rule_id', name: 'ruleId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'rule_name', name: 'ruleName', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'is_bound_to_rule',
                        name: 'isBoundToRule',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[AttachedPhoneInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetPhoneNumbers', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the new phone numbers.
             */
            getNewPhoneNumbers: (request) => {
                const reqMapper = [
                    { rawName: 'country_code', name: 'countryCode', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'phone_category_name',
                        name: 'phoneCategoryName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'phone_region_id',
                        name: 'phoneRegionId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'country_state',
                        name: 'countryState',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[NewPhoneInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetNewPhoneNumbers', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the phone number categories.
             */
            getPhoneNumberCategories: (request) => {
                const reqMapper = [
                    {
                        rawName: 'country_code',
                        name: 'countryCode',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'sandbox', name: 'sandbox', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'locale', name: 'locale', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[PhoneNumberCountryInfoType]'),
                    },
                ];
                return this.makeRequest('GetPhoneNumberCategories', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the phone number country states.
             */
            getPhoneNumberCountryStates: (request) => {
                const reqMapper = [
                    { rawName: 'country_code', name: 'countryCode', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'phone_category_name',
                        name: 'phoneCategoryName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'country_state',
                        name: 'countryState',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[PhoneNumberCountryStateInfoType]'),
                    },
                ];
                return this.makeRequest('GetPhoneNumberCountryStates', request, [reqMapper, respMapper]);
            },
            /**
             * Get the country regions of the phone numbers. The response also contains the info about multiple numbers subscription for the child accounts.
             */
            getPhoneNumberRegions: (request) => {
                const reqMapper = [
                    { rawName: 'country_code', name: 'countryCode', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'phone_category_name',
                        name: 'phoneCategoryName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'country_state',
                        name: 'countryState',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'omit_empty', name: 'omitEmpty', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'phone_region_id',
                        name: 'phoneRegionId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'phone_region_name',
                        name: 'phoneRegionName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'phone_region_code',
                        name: 'phoneRegionCode',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'locale', name: 'locale', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[PhoneNumberCountryRegionInfoType]'),
                    },
                ];
                return this.makeRequest('GetPhoneNumberRegions', request, [reqMapper, respMapper]);
            },
            /**
             * Get actual info on the country region of the phone numbers. The response also contains the info about multiple numbers subscription for the child accounts.
             */
            getActualPhoneNumberRegion: (request) => {
                const reqMapper = [
                    { rawName: 'country_code', name: 'countryCode', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'phone_category_name',
                        name: 'phoneCategoryName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'phone_region_id',
                        name: 'phoneRegionId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'country_state',
                        name: 'countryState',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'locale', name: 'locale', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('PhoneNumberCountryRegionInfoType'),
                    },
                ];
                return this.makeRequest('GetActualPhoneNumberRegion', request, [reqMapper, respMapper]);
            },
            /**
             * Gets all countries where the specific account has phone numbers.
             */
            getAccountPhoneNumberCountries: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[string]') },
                ];
                return this.makeRequest('GetAccountPhoneNumberCountries', request, [reqMapper, respMapper]);
            },
        };
        this.CallerIDs = {
            /**
             * Adds a new caller ID. Caller ID is the phone that is displayed to the called user. This number can be used for call back.
             */
            addCallerID: (request) => {
                const reqMapper = [
                    {
                        rawName: 'callerid_number',
                        name: 'calleridNumber',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'callerid_id', name: 'calleridId', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('AddCallerID', request, [reqMapper, respMapper]);
            },
            /**
             * Activates the CallerID by the verification code.
             */
            activateCallerID: (request) => {
                const reqMapper = [
                    { rawName: 'callerid_id', name: 'calleridId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'callerid_number',
                        name: 'calleridNumber',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'verification_code',
                        name: 'verificationCode',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('ActivateCallerID', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the CallerID. Note: you cannot delete a CID permanently (the antispam defence).
             */
            delCallerID: (request) => {
                const reqMapper = [
                    { rawName: 'callerid_id', name: 'calleridId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'callerid_number',
                        name: 'calleridNumber',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelCallerID', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the account callerIDs.
             */
            getCallerIDs: (request) => {
                const reqMapper = [
                    { rawName: 'callerid_id', name: 'calleridId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'callerid_number',
                        name: 'calleridNumber',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'active', name: 'active', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'order_by', name: 'orderBy', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[CallerIDInfoType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetCallerIDs', request, [reqMapper, respMapper]);
            },
            /**
             * Gets a verification code via phone call to the **callerid_number**.
             */
            verifyCallerID: (request) => {
                const reqMapper = [
                    { rawName: 'callerid_id', name: 'calleridId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'callerid_number',
                        name: 'calleridNumber',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('VerifyCallerID', request, [reqMapper, respMapper]);
            },
        };
        this.OutboundTestNumbers = {
            /**
             * Adds a personal phone number to test outgoing calls. Only one personal phone number can be used. To replace it with another, delete the existing one first.
             */
            addOutboundTestPhoneNumber: (request) => {
                const reqMapper = [
                    { rawName: 'phone_number', name: 'phoneNumber', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('AddOutboundTestPhoneNumber', request, [reqMapper, respMapper]);
            },
            /**
             * Starts a call to the added phone number and pronounces a verification code. You have only 5 verification attempts per day and 100 in total. 1 minute should pass between 2 attempts.
             */
            verifyOutboundTestPhoneNumber: (request) => {
                const reqMapper = [];
                const respMapper = [
                    {
                        rawName: 'daily_attempts_left',
                        name: 'dailyAttemptsLeft',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('VerifyOutboundTestPhoneNumber', request, [reqMapper, respMapper]);
            },
            /**
             * Activates the phone number by the verification code.
             */
            activateOutboundTestPhoneNumber: (request) => {
                const reqMapper = [
                    {
                        rawName: 'verification_code',
                        name: 'verificationCode',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('ActivateOutboundTestPhoneNumber', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the existing phone number.
             */
            delOutboundTestPhoneNumber: (request) => {
                const reqMapper = [];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelOutboundTestPhoneNumber', request, [reqMapper, respMapper]);
            },
            /**
             * Shows the phone number info.
             */
            getOutboundTestPhoneNumbers: (request) => {
                const reqMapper = [];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[OutboundTestPhonenumberInfoType]'),
                    },
                ];
                return this.makeRequest('GetOutboundTestPhoneNumbers', request, [reqMapper, respMapper]);
            },
        };
        this.Queues = {
            /**
             * Adds a new ACD queue.
             */
            addQueue: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'acd_queue_name',
                        name: 'acdQueueName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'acd_queue_priority',
                        name: 'acdQueuePriority',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'auto_binding',
                        name: 'autoBinding',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'service_probability',
                        name: 'serviceProbability',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'max_queue_size',
                        name: 'maxQueueSize',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'max_waiting_time',
                        name: 'maxWaitingTime',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'average_service_time',
                        name: 'averageServiceTime',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'acd_queue_id',
                        name: 'acdQueueId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('AddQueue', request, [reqMapper, respMapper]);
            },
            /**
             * Bind/unbind users to/from the specified ACD queues. Note that users and queues should be already bound to the same application.
             */
            bindUserToQueue: (request) => {
                const reqMapper = [
                    { rawName: 'bind', name: 'bind', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'acd_queue_id', name: 'acdQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'acd_queue_name',
                        name: 'acdQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('BindUserToQueue', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the ACD queue.
             */
            delQueue: (request) => {
                const reqMapper = [
                    { rawName: 'acd_queue_id', name: 'acdQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'acd_queue_name',
                        name: 'acdQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelQueue', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the ACD queue.
             */
            setQueueInfo: (request) => {
                const reqMapper = [
                    { rawName: 'acd_queue_id', name: 'acdQueueId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'acd_queue_name',
                        name: 'acdQueueName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_acd_queue_name',
                        name: 'newAcdQueueName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'acd_queue_priority',
                        name: 'acdQueuePriority',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'auto_binding',
                        name: 'autoBinding',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'service_probability',
                        name: 'serviceProbability',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'max_queue_size',
                        name: 'maxQueueSize',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'max_waiting_time',
                        name: 'maxWaitingTime',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'average_service_time',
                        name: 'averageServiceTime',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetQueueInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the ACD queues.
             */
            getQueues: (request) => {
                const reqMapper = [
                    { rawName: 'acd_queue_id', name: 'acdQueueId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'acd_queue_name',
                        name: 'acdQueueName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'skill_id', name: 'skillId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'excluded_skill_id',
                        name: 'excludedSkillId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'with_skills', name: 'withSkills', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'showing_skill_id',
                        name: 'showingSkillId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'with_operatorcount',
                        name: 'withOperatorcount',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[QueueInfoType]') },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetQueues', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the current ACD queue state.
             */
            getACDState: (request) => {
                const reqMapper = [
                    { rawName: 'acd_queue_id', name: 'acdQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('ACDStateType') },
                ];
                return this.makeRequest('GetACDState', request, [reqMapper, respMapper]);
            },
            /**
             * Get statistics for calls distributed to users (referred as 'operators') via the 'ACD' module. This method can filter statistic based on operator ids, queue ids and date-time interval. It can also group results by day or hour.
             */
            getACDOperatorStatistics: (request) => {
                const reqMapper = [
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'acd_queue_id', name: 'acdQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'abbreviation',
                        name: 'abbreviation',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'report', name: 'report', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'aggregation', name: 'aggregation', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'group', name: 'group', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[ACDOperatorAggregationGroupType]'),
                    },
                ];
                return this.makeRequest('GetACDOperatorStatistics', request, [reqMapper, respMapper]);
            },
            /**
             * Get statistics for calls distributed to users (referred as 'operators') via the 'queue' distribution system. This method can filter statistic based on operator ids, queue ids and date-time interval. It can also group results by day or hour.
             */
            getACDQueueStatistics: (request) => {
                const reqMapper = [
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    {
                        rawName: 'abbreviation',
                        name: 'abbreviation',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'acd_queue_id', name: 'acdQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'report', name: 'report', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'aggregation', name: 'aggregation', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[ACDQueueStatisticsType]'),
                    },
                ];
                return this.makeRequest('GetACDQueueStatistics', request, [reqMapper, respMapper]);
            },
            /**
             * Get statistics for the specified operators and ACD statuses. This method can filter statistics by operator ids and statuses. It can also group results by day/hour or users.
             */
            getACDOperatorStatusStatistics: (request) => {
                const reqMapper = [
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'acd_status', name: 'acdStatus', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'aggregation', name: 'aggregation', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'group', name: 'group', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[ACDOperatorStatusAggregationGroupType]'),
                    },
                ];
                return this.makeRequest('GetACDOperatorStatusStatistics', request, [reqMapper, respMapper]);
            },
        };
        this.SmartQueue = {
            /**
             * Gets the metrics for the specified SmartQueue for the last 30 minutes. Refer to the <a href="/docs/guides/contact-center/reporting">SmartQueue reporting guide</a> to learn more.
             */
            getSmartQueueRealtimeMetrics: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'report_type',
                        name: 'reportType',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'timezone', name: 'timezone', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'interval', name: 'interval', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'group_by', name: 'groupBy', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'max_waiting_sec',
                        name: 'maxWaitingSec',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[SmartQueueMetricsResult]'),
                    },
                    { rawName: 'timezone', name: 'timezone', transformer: TypeTransformer_1.default.from('string') },
                ];
                return this.makeRequest('GetSmartQueueRealtimeMetrics', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the metrics for the specified SmartQueue for the last 2 days. Refer to the <a href="/docs/guides/contact-center/reporting">SmartQueue reporting guide</a> to learn more.
             */
            getSmartQueueDayHistory: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'report_type',
                        name: 'reportType',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'timezone', name: 'timezone', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'interval', name: 'interval', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'group_by', name: 'groupBy', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'max_waiting_sec',
                        name: 'maxWaitingSec',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[SmartQueueMetricsResult]'),
                    },
                    { rawName: 'timezone', name: 'timezone', transformer: TypeTransformer_1.default.from('string') },
                ];
                return this.makeRequest('GetSmartQueueDayHistory', request, [reqMapper, respMapper]);
            },
            /**
             * Gets history for the specified SmartQueue. Refer to the <a href="/docs/guides/contact-center/reporting">SmartQueue reporting guide</a> to learn more.
             */
            requestSmartQueueHistory: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    {
                        rawName: 'report_type',
                        name: 'reportType',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'timezone', name: 'timezone', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'interval', name: 'interval', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'group_by', name: 'groupBy', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'max_waiting_sec',
                        name: 'maxWaitingSec',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'history_report_id',
                        name: 'historyReportId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('RequestSmartQueueHistory', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the current state of the specified SmartQueue.
             */
            getSQState: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'timezone', name: 'timezone', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[SmartQueueState]'),
                    },
                ];
                return this.makeRequest('GetSQState', request, [reqMapper, respMapper]);
            },
            /**
             * Adds a status if there is no match for the given internal status and renames it if there is a match. It means that if the passed **sq_status_name** parameter is not in the mapping table, a new entry is created in there; if it is, the **name** field in its mapping is replaced with **custom_status_name**.
             */
            sQ_SetAgentCustomStatusMapping: (request) => {
                const reqMapper = [
                    {
                        rawName: 'sq_status_name',
                        name: 'sqStatusName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'custom_status_name',
                        name: 'customStatusName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_SetAgentCustomStatusMapping', request, [reqMapper, respMapper]);
            },
            /**
             * Returns the mapping list of SQ statuses and custom statuses. SQ statuses are returned whether or not they have mappings to custom statuses.
             */
            sQ_GetAgentCustomStatusMapping: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'sq_status_name',
                        name: 'sqStatusName',
                        transformer: TypeTransformer_1.default.from('string'),
                    },
                    {
                        rawName: 'custom_status_name',
                        name: 'customStatusName',
                        transformer: TypeTransformer_1.default.from('string'),
                    },
                ];
                return this.makeRequest('SQ_GetAgentCustomStatusMapping', request, [reqMapper, respMapper]);
            },
            /**
             * Removes a mapping from the mapping table. If there is no such mapping, does nothing.
             */
            sQ_DeleteAgentCustomStatusMapping: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'sq_status_name',
                        name: 'sqStatusName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_DeleteAgentCustomStatusMapping', request, [
                    reqMapper,
                    respMapper,
                ]);
            },
            /**
             * Adds a new queue.
             */
            sQ_AddQueue: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'call_agent_selection',
                        name: 'callAgentSelection',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'call_task_selection',
                        name: 'callTaskSelection',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'im_agent_selection',
                        name: 'imAgentSelection',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'im_task_selection',
                        name: 'imTaskSelection',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'call_max_waiting_time',
                        name: 'callMaxWaitingTime',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'im_max_waiting_time',
                        name: 'imMaxWaitingTime',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'call_max_queue_size',
                        name: 'callMaxQueueSize',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'im_max_queue_size',
                        name: 'imMaxQueueSize',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'priority', name: 'priority', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_AddQueue', request, [reqMapper, respMapper]);
            },
            /**
             * Edits an existing queue.
             */
            sQ_SetQueueInfo: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_sq_queue_name',
                        name: 'newSqQueueName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'call_agent_selection',
                        name: 'callAgentSelection',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'im_agent_selection',
                        name: 'imAgentSelection',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'call_task_selection',
                        name: 'callTaskSelection',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'im_task_selection',
                        name: 'imTaskSelection',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'call_max_waiting_time',
                        name: 'callMaxWaitingTime',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'im_max_waiting_time',
                        name: 'imMaxWaitingTime',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'call_max_queue_size',
                        name: 'callMaxQueueSize',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'im_max_queue_size',
                        name: 'imMaxQueueSize',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'priority', name: 'priority', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_SetQueueInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes a queue.
             */
            sQ_DelQueue: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_DelQueue', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the queue(s).
             */
            sQ_GetQueues: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'sq_queue_name_template',
                        name: 'sqQueueNameTemplate',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'excluded_user_id',
                        name: 'excludedUserId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'excluded_user_name',
                        name: 'excludedUserName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'with_agentcount',
                        name: 'withAgentcount',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('GetSQQueuesResult'),
                    },
                ];
                return this.makeRequest('SQ_GetQueues', request, [reqMapper, respMapper]);
            },
            /**
             * Adds a new skill to the app.
             */
            sQ_AddSkill: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'sq_skill_name',
                        name: 'sqSkillName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_AddSkill', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes a skill and detaches it from agents.
             */
            sQ_DelSkill: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'sq_skill_id', name: 'sqSkillId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'sq_skill_name',
                        name: 'sqSkillName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_DelSkill', request, [reqMapper, respMapper]);
            },
            /**
             * Edits an existing skill.
             */
            sQ_SetSkillInfo: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'sq_skill_id', name: 'sqSkillId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'sq_skill_name',
                        name: 'sqSkillName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_sq_skill_name',
                        name: 'newSqSkillName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_SetSkillInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Binds skills to agents.
             */
            sQ_BindSkill: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'sq_skills', name: 'sqSkills', transformer: TypeTransformer_1.default.to('Object') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'bind_mode', name: 'bindMode', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_BindSkill', request, [reqMapper, respMapper]);
            },
            /**
             * Unbinds skills from agents.
             */
            sQ_UnbindSkill: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'sq_skill_id', name: 'sqSkillId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'sq_skill_name',
                        name: 'sqSkillName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_UnbindSkill', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the skill(s).
             */
            sQ_GetSkills: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'sq_skill_id', name: 'sqSkillId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'sq_skill_name',
                        name: 'sqSkillName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'sq_skill_name_template',
                        name: 'sqSkillNameTemplate',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'excluded_user_id',
                        name: 'excludedUserId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'excluded_user_name',
                        name: 'excludedUserName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('GetSQSkillsResult'),
                    },
                ];
                return this.makeRequest('SQ_GetSkills', request, [reqMapper, respMapper]);
            },
            /**
             * Binds agents to a queue.
             */
            sQ_BindAgent: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'bind_mode', name: 'bindMode', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_BindAgent', request, [reqMapper, respMapper]);
            },
            /**
             * Unbinds agents from queues.
             */
            sQ_UnbindAgent: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_UnbindAgent', request, [reqMapper, respMapper]);
            },
            /**
             * Gets agents.
             */
            sQ_GetAgents: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'handle_calls',
                        name: 'handleCalls',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'sq_queue_id', name: 'sqQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'sq_queue_name',
                        name: 'sqQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'excluded_sq_queue_id',
                        name: 'excludedSqQueueId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'excluded_sq_queue_name',
                        name: 'excludedSqQueueName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'sq_skills', name: 'sqSkills', transformer: TypeTransformer_1.default.to('Object') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'user_name_template',
                        name: 'userNameTemplate',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'sq_statuses', name: 'sqStatuses', transformer: TypeTransformer_1.default.to('Object') },
                    {
                        rawName: 'with_sq_skills',
                        name: 'withSqSkills',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'with_sq_queues',
                        name: 'withSqQueues',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'with_sq_statuses',
                        name: 'withSqStatuses',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('GetSQAgentsResult'),
                    },
                ];
                return this.makeRequest('SQ_GetAgents', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the agent settings.
             */
            sQ_SetAgentInfo: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'handle_calls',
                        name: 'handleCalls',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    {
                        rawName: 'max_simultaneous_conversations',
                        name: 'maxSimultaneousConversations',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SQ_SetAgentInfo', request, [reqMapper, respMapper]);
            },
        };
        this.Skills = {
            /**
             * Adds a new operator's skill. Works only for ACDv1. For SmartQueue/ACDv2, use <a href="#how-auth-works">this reference</a>.
             */
            addSkill: (request) => {
                const reqMapper = [
                    { rawName: 'skill_name', name: 'skillName', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'skill_id', name: 'skillId', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('AddSkill', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes an operator's skill. Works only for ACDv1. For SmartQueue/ACDv2, use <a href="#how-auth-works">this reference</a>.
             */
            delSkill: (request) => {
                const reqMapper = [
                    { rawName: 'skill_id', name: 'skillId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'skill_name', name: 'skillName', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelSkill', request, [reqMapper, respMapper]);
            },
            /**
             * Edits an operator's skill. Works only for ACDv1. For SmartQueue/ACDv2, use <a href="#how-auth-works">this reference</a>.
             */
            setSkillInfo: (request) => {
                const reqMapper = [
                    { rawName: 'skill_id', name: 'skillId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'skill_name', name: 'skillName', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'new_skill_name',
                        name: 'newSkillName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetSkillInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the skills of an operator. Works only for ACDv1. For SmartQueue/ACDv2, use <a href="#how-auth-works">this reference</a>.
             */
            getSkills: (request) => {
                const reqMapper = [
                    { rawName: 'skill_id', name: 'skillId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'skill_name', name: 'skillName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[SkillInfoType]') },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetSkills', request, [reqMapper, respMapper]);
            },
            /**
             * Binds the specified skills to the users (ACD operators) and/or the ACD queues. Works only for ACDv1. For SmartQueue/ACDv2, use <a href="#how-auth-works">this reference</a>.
             */
            bindSkill: (request) => {
                const reqMapper = [
                    { rawName: 'skill_id', name: 'skillId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'skill_name', name: 'skillName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'user_id', name: 'userId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'user_name', name: 'userName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'acd_queue_id', name: 'acdQueueId', transformer: TypeTransformer_1.default.to('intlist') },
                    {
                        rawName: 'acd_queue_name',
                        name: 'acdQueueName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'bind', name: 'bind', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('BindSkill', request, [reqMapper, respMapper]);
            },
        };
        this.AdminUsers = {
            /**
             * Adds a new admin user into the specified parent or child account.
             */
            addAdminUser: (request) => {
                const reqMapper = [
                    {
                        rawName: 'new_admin_user_name',
                        name: 'newAdminUserName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'admin_user_display_name',
                        name: 'adminUserDisplayName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_admin_user_password',
                        name: 'newAdminUserPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'admin_user_active',
                        name: 'adminUserActive',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'admin_role_id',
                        name: 'adminRoleId',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'admin_role_name',
                        name: 'adminRoleName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'admin_user_id',
                        name: 'adminUserId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                    {
                        rawName: 'admin_user_api_key',
                        name: 'adminUserApiKey',
                        transformer: TypeTransformer_1.default.from('string'),
                    },
                ];
                return this.makeRequest('AddAdminUser', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the specified admin user.
             */
            delAdminUser: (request) => {
                const reqMapper = [
                    {
                        rawName: 'required_admin_user_id',
                        name: 'requiredAdminUserId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'required_admin_user_name',
                        name: 'requiredAdminUserName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelAdminUser', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the specified admin user.
             */
            setAdminUserInfo: (request) => {
                const reqMapper = [
                    {
                        rawName: 'required_admin_user_id',
                        name: 'requiredAdminUserId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'required_admin_user_name',
                        name: 'requiredAdminUserName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_admin_user_name',
                        name: 'newAdminUserName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'admin_user_display_name',
                        name: 'adminUserDisplayName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_admin_user_password',
                        name: 'newAdminUserPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'admin_user_active',
                        name: 'adminUserActive',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetAdminUserInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the admin users of the specified account. Note that both account types - parent and child - can have its own admins.
             */
            getAdminUsers: (request) => {
                const reqMapper = [
                    {
                        rawName: 'required_admin_user_id',
                        name: 'requiredAdminUserId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'required_admin_user_name',
                        name: 'requiredAdminUserName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'admin_user_display_name',
                        name: 'adminUserDisplayName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'admin_user_active',
                        name: 'adminUserActive',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'with_roles', name: 'withRoles', transformer: TypeTransformer_1.default.to('boolean') },
                    {
                        rawName: 'with_access_entries',
                        name: 'withAccessEntries',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[AdminUserType]') },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetAdminUsers', request, [reqMapper, respMapper]);
            },
            /**
             * Attaches the admin role(s) to the already existing admin(s).
             */
            attachAdminRole: (request) => {
                const reqMapper = [
                    {
                        rawName: 'required_admin_user_id',
                        name: 'requiredAdminUserId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'required_admin_user_name',
                        name: 'requiredAdminUserName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'admin_role_id',
                        name: 'adminRoleId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'admin_role_name',
                        name: 'adminRoleName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'mode', name: 'mode', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('AttachAdminRole', request, [reqMapper, respMapper]);
            },
        };
        this.AdminRoles = {
            /**
             * Adds a new admin role.
             */
            addAdminRole: (request) => {
                const reqMapper = [
                    {
                        rawName: 'admin_role_name',
                        name: 'adminRoleName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'admin_role_active',
                        name: 'adminRoleActive',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'like_admin_role_id',
                        name: 'likeAdminRoleId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'like_admin_role_name',
                        name: 'likeAdminRoleName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'allowed_entries',
                        name: 'allowedEntries',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'denied_entries',
                        name: 'deniedEntries',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'admin_role_id',
                        name: 'adminRoleId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('AddAdminRole', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the specified admin role.
             */
            delAdminRole: (request) => {
                const reqMapper = [
                    {
                        rawName: 'admin_role_id',
                        name: 'adminRoleId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'admin_role_name',
                        name: 'adminRoleName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelAdminRole', request, [reqMapper, respMapper]);
            },
            /**
             * Edits the specified admin role.
             */
            setAdminRoleInfo: (request) => {
                const reqMapper = [
                    {
                        rawName: 'admin_role_id',
                        name: 'adminRoleId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'admin_role_name',
                        name: 'adminRoleName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_admin_role_name',
                        name: 'newAdminRoleName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'admin_role_active',
                        name: 'adminRoleActive',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'entry_modification_mode',
                        name: 'entryModificationMode',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'allowed_entries',
                        name: 'allowedEntries',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'denied_entries',
                        name: 'deniedEntries',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    {
                        rawName: 'like_admin_role_id',
                        name: 'likeAdminRoleId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'like_admin_role_name',
                        name: 'likeAdminRoleName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetAdminRoleInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the admin roles.
             */
            getAdminRoles: (request) => {
                const reqMapper = [
                    {
                        rawName: 'admin_role_id',
                        name: 'adminRoleId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'admin_role_name',
                        name: 'adminRoleName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'admin_role_active',
                        name: 'adminRoleActive',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'with_entries',
                        name: 'withEntries',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'with_account_roles',
                        name: 'withAccountRoles',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'with_parent_roles',
                        name: 'withParentRoles',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                    {
                        rawName: 'included_admin_user_id',
                        name: 'includedAdminUserId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'excluded_admin_user_id',
                        name: 'excludedAdminUserId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'full_admin_users_matching',
                        name: 'fullAdminUsersMatching',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'showing_admin_user_id',
                        name: 'showingAdminUserId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[AdminRoleType]') },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetAdminRoles', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the all available admin role entries.
             */
            getAvailableAdminRoleEntries: (request) => {
                const reqMapper = [];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[string]') },
                ];
                return this.makeRequest('GetAvailableAdminRoleEntries', request, [reqMapper, respMapper]);
            },
        };
        this.AuthorizedIPs = {
            /**
             * Adds a new authorized IP4 or network to the white/black list.
             */
            addAuthorizedAccountIP: (request) => {
                const reqMapper = [
                    {
                        rawName: 'authorized_ip',
                        name: 'authorizedIp',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'allowed', name: 'allowed', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('AddAuthorizedAccountIP', request, [reqMapper, respMapper]);
            },
            /**
             * Removes the authorized IP4 or network from the white/black list.
             */
            delAuthorizedAccountIP: (request) => {
                const reqMapper = [
                    {
                        rawName: 'authorized_ip',
                        name: 'authorizedIp',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'contains_ip', name: 'containsIp', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'allowed', name: 'allowed', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelAuthorizedAccountIP', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the authorized IP4 or network.
             */
            getAuthorizedAccountIPs: (request) => {
                const reqMapper = [
                    {
                        rawName: 'authorized_ip',
                        name: 'authorizedIp',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'allowed', name: 'allowed', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'contains_ip', name: 'containsIp', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[AuthorizedAccountIPType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetAuthorizedAccountIPs', request, [reqMapper, respMapper]);
            },
            /**
             * Tests whether the IP4 is banned or allowed.
             */
            checkAuthorizedAccountIP: (request) => {
                const reqMapper = [
                    {
                        rawName: 'authorized_ip',
                        name: 'authorizedIp',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('boolean') },
                    {
                        rawName: 'authorized_ip',
                        name: 'authorizedIp',
                        transformer: TypeTransformer_1.default.from('string'),
                    },
                ];
                return this.makeRequest('CheckAuthorizedAccountIP', request, [reqMapper, respMapper]);
            },
        };
        this.RegulationAddress = {
            /**
             * Links the regulation address to a phone.
             */
            linkRegulationAddress: (request) => {
                const reqMapper = [
                    {
                        rawName: 'regulation_address_id',
                        name: 'regulationAddressId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'phone_id', name: 'phoneId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'phone_number', name: 'phoneNumber', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('boolean') },
                ];
                return this.makeRequest('LinkRegulationAddress', request, [reqMapper, respMapper]);
            },
            /**
             * Searches for available zip codes.
             */
            getZIPCodes: (request) => {
                const reqMapper = [
                    { rawName: 'country_code', name: 'countryCode', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'phone_region_code',
                        name: 'phoneRegionCode',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[ZipCode]') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetZIPCodes', request, [reqMapper, respMapper]);
            },
            /**
             * Searches for the user's regulation address.
             */
            getRegulationsAddress: (request) => {
                const reqMapper = [
                    { rawName: 'country_code', name: 'countryCode', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'phone_category_name',
                        name: 'phoneCategoryName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'phone_region_code',
                        name: 'phoneRegionCode',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'regulation_address_id',
                        name: 'regulationAddressId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'verified', name: 'verified', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'in_progress', name: 'inProgress', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[RegulationAddress]'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetRegulationsAddress', request, [reqMapper, respMapper]);
            },
            /**
             * Searches for the available regulation for a link.
             */
            getAvailableRegulations: (request) => {
                const reqMapper = [
                    { rawName: 'country_code', name: 'countryCode', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'phone_category_name',
                        name: 'phoneCategoryName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'phone_region_code',
                        name: 'phoneRegionCode',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('boolean') },
                    {
                        rawName: 'available_address',
                        name: 'availableAddress',
                        transformer: TypeTransformer_1.default.from('[RegulationAddress]'),
                    },
                    {
                        rawName: 'count_in_progress',
                        name: 'countInProgress',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('GetAvailableRegulations', request, [reqMapper, respMapper]);
            },
            /**
             * Gets all countries.
             */
            getCountries: (request) => {
                const reqMapper = [
                    { rawName: 'country_code', name: 'countryCode', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[RegulationCountry]'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetCountries', request, [reqMapper, respMapper]);
            },
            /**
             * Gets available regions in a country.
             */
            getRegions: (request) => {
                const reqMapper = [
                    { rawName: 'country_code', name: 'countryCode', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'phone_category_name',
                        name: 'phoneCategoryName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'city_name', name: 'cityName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[RegulationRegionRecord]'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetRegions', request, [reqMapper, respMapper]);
            },
        };
        this.PushCredentials = {
            /**
             * Adds push credentials.
             */
            addPushCredential: (request) => {
                const reqMapper = [
                    {
                        rawName: 'push_provider_name',
                        name: 'pushProviderName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'push_provider_id',
                        name: 'pushProviderId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'cert_content', name: 'certContent', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'cert_password',
                        name: 'certPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'is_dev_mode', name: 'isDevMode', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'sender_id', name: 'senderId', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'server_key', name: 'serverKey', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'service_account_file',
                        name: 'serviceAccountFile',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'huawei_client_id',
                        name: 'huaweiClientId',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'huawei_client_secret',
                        name: 'huaweiClientSecret',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'huawei_application_id',
                        name: 'huaweiApplicationId',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'credential_bundle',
                        name: 'credentialBundle',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'cert_file_name',
                        name: 'certFileName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'push_credential_id',
                        name: 'pushCredentialId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('AddPushCredential', request, [reqMapper, respMapper]);
            },
            /**
             * Modifies push credentials.
             */
            setPushCredential: (request) => {
                const reqMapper = [
                    {
                        rawName: 'push_credential_id',
                        name: 'pushCredentialId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'cert_content', name: 'certContent', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'cert_password',
                        name: 'certPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'is_dev_mode', name: 'isDevMode', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'sender_id', name: 'senderId', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'server_key', name: 'serverKey', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'service_account_file',
                        name: 'serviceAccountFile',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'huawei_client_id',
                        name: 'huaweiClientId',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'huawei_client_secret',
                        name: 'huaweiClientSecret',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'huawei_application_id',
                        name: 'huaweiApplicationId',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetPushCredential', request, [reqMapper, respMapper]);
            },
            /**
             * Removes push credentials.
             */
            delPushCredential: (request) => {
                const reqMapper = [
                    {
                        rawName: 'push_credential_id',
                        name: 'pushCredentialId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelPushCredential', request, [reqMapper, respMapper]);
            },
            /**
             * Gets push credentials.
             */
            getPushCredential: (request) => {
                const reqMapper = [
                    {
                        rawName: 'push_credential_id',
                        name: 'pushCredentialId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'push_provider_name',
                        name: 'pushProviderName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'push_provider_id',
                        name: 'pushProviderId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'with_cert', name: 'withCert', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[PushCredentialInfo]'),
                    },
                ];
                return this.makeRequest('GetPushCredential', request, [reqMapper, respMapper]);
            },
            /**
             * Binds push credentials to applications.
             */
            bindPushCredential: (request) => {
                const reqMapper = [
                    {
                        rawName: 'push_credential_id',
                        name: 'pushCredentialId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    { rawName: 'bind', name: 'bind', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('BindPushCredential', request, [reqMapper, respMapper]);
            },
        };
        this.DialogflowCredentials = {
            /**
             * Adds a Dialogflow key.
             */
            addDialogflowKey: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'json_credentials',
                        name: 'jsonCredentials',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'dialogflow_key_id',
                        name: 'dialogflowKeyId',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('AddDialogflowKey', request, [reqMapper, respMapper]);
            },
            /**
             * Edits a Dialogflow key.
             */
            setDialogflowKey: (request) => {
                const reqMapper = [
                    {
                        rawName: 'dialogflow_key_id',
                        name: 'dialogflowKeyId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetDialogflowKey', request, [reqMapper, respMapper]);
            },
            /**
             * Removes a Dialogflow key.
             */
            delDialogflowKey: (request) => {
                const reqMapper = [
                    {
                        rawName: 'dialogflow_key_id',
                        name: 'dialogflowKeyId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelDialogflowKey', request, [reqMapper, respMapper]);
            },
            /**
             * Gets Dialogflow keys.
             */
            getDialogflowKeys: (request) => {
                const reqMapper = [
                    {
                        rawName: 'dialogflow_key_id',
                        name: 'dialogflowKeyId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[DialogflowKeyInfo]'),
                    },
                ];
                return this.makeRequest('GetDialogflowKeys', request, [reqMapper, respMapper]);
            },
            /**
             * Binds a Dialogflow key to the specified applications.
             */
            bindDialogflowKeys: (request) => {
                const reqMapper = [
                    {
                        rawName: 'dialogflow_key_id',
                        name: 'dialogflowKeyId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    { rawName: 'bind', name: 'bind', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('BindDialogflowKeys', request, [reqMapper, respMapper]);
            },
        };
        this.SMS = {
            /**
             * Sends an SMS message between two phone numbers. The source phone number should be purchased from Voximplant and support SMS (which is indicated by the <b>is_sms_supported</b> property in the objects returned by the [GetPhoneNumbers] Management API) and SMS should be enabled for it via the [ControlSms] Management API. SMS messages can be received via HTTP callbacks, see <a href='/docs/guides/managementapi/callbacks'>this article</a> for details.
             */
            sendSmsMessage: (request) => {
                const reqMapper = [
                    { rawName: 'source', name: 'source', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'destination', name: 'destination', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'sms_body', name: 'smsBody', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'store_body', name: 'storeBody', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'message_id', name: 'messageId', transformer: TypeTransformer_1.default.from('number') },
                    {
                        rawName: 'fragments_count',
                        name: 'fragmentsCount',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('SendSmsMessage', request, [reqMapper, respMapper]);
            },
            /**
             * Sends an SMS message from the application to customers. The source phone number should be purchased from Voximplant and support SMS (which is indicated by the <b>is_sms_supported</b> property in the objects returned by the <a href='/docs/references/httpapi/managing_phone_numbers#getphonenumbers'>/GetPhoneNumbers</a> Management API) and SMS should be enabled for it via the <a href='/docs/references/httpapi/managing_sms#controlsms'>/ControlSms</a> Management API.
             */
            a2PSendSms: (request) => {
                const reqMapper = [
                    { rawName: 'src_number', name: 'srcNumber', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'dst_numbers',
                        name: 'dstNumbers',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                    { rawName: 'text', name: 'text', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'store_body', name: 'storeBody', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[SmsTransaction]'),
                    },
                    { rawName: 'failed', name: 'failed', transformer: TypeTransformer_1.default.from('[FailedSms]') },
                    {
                        rawName: 'fragments_count',
                        name: 'fragmentsCount',
                        transformer: TypeTransformer_1.default.from('number'),
                    },
                ];
                return this.makeRequest('A2PSendSms', request, [reqMapper, respMapper]);
            },
            /**
             * Enables or disables sending and receiving SMS for the phone number. Can be used only for phone numbers with SMS support, which is indicated by the <b>is_sms_supported</b> property in the objects returned by the [GetPhoneNumbers] Management API. Each incoming SMS message is charged according to the <a href='//voximplant.com/pricing'>pricing</a>. If enabled, SMS can be sent from this phone number via the [SendSmsMessage] Management API and received via the [InboundSmsCallback] property of the HTTP callback. See <a href='/docs/guides/managementapi/callbacks'>this article</a> for HTTP callback details.
             */
            controlSms: (request) => {
                const reqMapper = [
                    { rawName: 'phone_number', name: 'phoneNumber', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'command', name: 'command', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('ControlSms', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the history of sent and/or received SMS.
             */
            getSmsHistory: (request) => {
                const reqMapper = [
                    {
                        rawName: 'source_number',
                        name: 'sourceNumber',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'destination_number',
                        name: 'destinationNumber',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'direction', name: 'direction', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'output', name: 'output', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[SmsHistoryType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetSmsHistory', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the history of sent/or received A2P SMS.
             */
            a2PGetSmsHistory: (request) => {
                const reqMapper = [
                    {
                        rawName: 'source_number',
                        name: 'sourceNumber',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'destination_number',
                        name: 'destinationNumber',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'from_date', name: 'fromDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'to_date', name: 'toDate', transformer: TypeTransformer_1.default.to('timestamp') },
                    { rawName: 'output', name: 'output', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'delivery_status',
                        name: 'deliveryStatus',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('[A2PSmsHistoryType]'),
                    },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('A2PGetSmsHistory', request, [reqMapper, respMapper]);
            },
        };
        this.RecordStorages = {
            /**
             * Gets the record storages.
             */
            getRecordStorages: (request) => {
                const reqMapper = [
                    {
                        rawName: 'record_storage_id',
                        name: 'recordStorageId',
                        transformer: TypeTransformer_1.default.to('intlist'),
                    },
                    {
                        rawName: 'record_storage_name',
                        name: 'recordStorageName',
                        transformer: TypeTransformer_1.default.to('stringlist'),
                    },
                ];
                const respMapper = [
                    {
                        rawName: 'result',
                        name: 'result',
                        transformer: TypeTransformer_1.default.from('RecordStorageInfoType'),
                    },
                ];
                return this.makeRequest('GetRecordStorages', request, [reqMapper, respMapper]);
            },
        };
        this.RoleSystem = {
            /**
             * Creates a public/private key pair. You can optionally specify one or more roles for the key.
             */
            createKey: (request) => {
                const reqMapper = [
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'key_name', name: 'keyName', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'role_id', name: 'roleId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'role_name', name: 'roleName', transformer: TypeTransformer_1.default.to('stringlist') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[KeyInfo]') },
                ];
                return this.makeRequest('CreateKey', request, [reqMapper, respMapper]);
            },
            /**
             * Gets key info of the specified account.
             */
            getKeys: (request) => {
                const reqMapper = [
                    { rawName: 'key_id', name: 'keyId', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'with_roles', name: 'withRoles', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[KeyView]') },
                ];
                return this.makeRequest('GetKeys', request, [reqMapper, respMapper]);
            },
            /**
             * Updates info of the specified key.
             */
            updateKey: (request) => {
                const reqMapper = [
                    { rawName: 'key_id', name: 'keyId', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'key_name', name: 'keyName', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('UpdateKey', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the specified key.
             */
            deleteKey: (request) => {
                const reqMapper = [
                    { rawName: 'key_id', name: 'keyId', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DeleteKey', request, [reqMapper, respMapper]);
            },
            /**
             * Set roles for the specified key.
             */
            setKeyRoles: (request) => {
                const reqMapper = [
                    { rawName: 'key_id', name: 'keyId', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'role_id', name: 'roleId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'role_name', name: 'roleName', transformer: TypeTransformer_1.default.to('stringlist') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetKeyRoles', request, [reqMapper, respMapper]);
            },
            /**
             * Gets roles of the specified key.
             */
            getKeyRoles: (request) => {
                const reqMapper = [
                    { rawName: 'key_id', name: 'keyId', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'with_expanded_roles',
                        name: 'withExpandedRoles',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[RoleView]') },
                ];
                return this.makeRequest('GetKeyRoles', request, [reqMapper, respMapper]);
            },
            /**
             * Removes the specified roles of a key.
             */
            removeKeyRoles: (request) => {
                const reqMapper = [
                    { rawName: 'key_id', name: 'keyId', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'role_id', name: 'roleId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'role_name', name: 'roleName', transformer: TypeTransformer_1.default.to('stringlist') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('RemoveKeyRoles', request, [reqMapper, respMapper]);
            },
            /**
             * Creates a subuser.
             */
            addSubUser: (request) => {
                const reqMapper = [
                    {
                        rawName: 'new_subuser_name',
                        name: 'newSubuserName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_subuser_password',
                        name: 'newSubuserPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'role_id', name: 'roleId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'role_name', name: 'roleName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('SubUserID') },
                ];
                return this.makeRequest('AddSubUser', request, [reqMapper, respMapper]);
            },
            /**
             * Gets subusers.
             */
            getSubUsers: (request) => {
                const reqMapper = [
                    { rawName: 'subuser_id', name: 'subuserId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'with_roles', name: 'withRoles', transformer: TypeTransformer_1.default.to('boolean') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[SubUserView]') },
                ];
                return this.makeRequest('GetSubUsers', request, [reqMapper, respMapper]);
            },
            /**
             * Edits a subuser.
             */
            setSubUserInfo: (request) => {
                const reqMapper = [
                    { rawName: 'subuser_id', name: 'subuserId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'old_subuser_password',
                        name: 'oldSubuserPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    {
                        rawName: 'new_subuser_password',
                        name: 'newSubuserPassword',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'description', name: 'description', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetSubUserInfo', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes a subuser.
             */
            delSubUser: (request) => {
                const reqMapper = [
                    { rawName: 'subuser_id', name: 'subuserId', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelSubUser', request, [reqMapper, respMapper]);
            },
            /**
             * Adds the specified roles for a subuser.
             */
            setSubUserRoles: (request) => {
                const reqMapper = [
                    { rawName: 'subuser_id', name: 'subuserId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'role_id', name: 'roleId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'role_name', name: 'roleName', transformer: TypeTransformer_1.default.to('stringlist') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('SetSubUserRoles', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the subuser's roles.
             */
            getSubUserRoles: (request) => {
                const reqMapper = [
                    { rawName: 'subuser_id', name: 'subuserId', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'with_expanded_roles',
                        name: 'withExpandedRoles',
                        transformer: TypeTransformer_1.default.to('boolean'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[RoleView]') },
                ];
                return this.makeRequest('GetSubUserRoles', request, [reqMapper, respMapper]);
            },
            /**
             * Removes the specified roles of a subuser.
             */
            removeSubUserRoles: (request) => {
                const reqMapper = [
                    { rawName: 'subuser_id', name: 'subuserId', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'role_id', name: 'roleId', transformer: TypeTransformer_1.default.to('intlist') },
                    { rawName: 'role_name', name: 'roleName', transformer: TypeTransformer_1.default.to('stringlist') },
                    { rawName: 'force', name: 'force', transformer: TypeTransformer_1.default.to('boolean') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('RemoveSubUserRoles', request, [reqMapper, respMapper]);
            },
            /**
             * Gets all roles.
             */
            getRoles: (request) => {
                const reqMapper = [
                    { rawName: 'group_name', name: 'groupName', transformer: TypeTransformer_1.default.to('string') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[RoleView]') },
                ];
                return this.makeRequest('GetRoles', request, [reqMapper, respMapper]);
            },
            /**
             * Gets role groups.
             */
            getRoleGroups: (request) => {
                const reqMapper = [];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('[RoleGroupView]') },
                ];
                return this.makeRequest('GetRoleGroups', request, [reqMapper, respMapper]);
            },
        };
        this.KeyValueStorage = {
            /**
             * Creates or updates a key-value pair. If an existing key is passed, the method returns the existing item and changes the value if needed. The keys should be unique within a Voximplant application.
             */
            setKeyValueItem: (request) => {
                const reqMapper = [
                    { rawName: 'key', name: 'key', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'value', name: 'value', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                    { rawName: 'ttl', name: 'ttl', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'expires_at', name: 'expiresAt', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('KeyValueItems') },
                ];
                return this.makeRequest('SetKeyValueItem', request, [reqMapper, respMapper]);
            },
            /**
             * Deletes the specified key-value pair from the storage.
             */
            delKeyValueItem: (request) => {
                const reqMapper = [
                    { rawName: 'key', name: 'key', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('DelKeyValueItem', request, [reqMapper, respMapper]);
            },
            /**
             * Gets the specified key-value pair from the storage.
             */
            getKeyValueItem: (request) => {
                const reqMapper = [
                    { rawName: 'key', name: 'key', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('KeyValueItems') },
                ];
                return this.makeRequest('GetKeyValueItem', request, [reqMapper, respMapper]);
            },
            /**
             * Gets all the key-value pairs in which the keys begin with a pattern.
             */
            getKeyValueItems: (request) => {
                const reqMapper = [
                    { rawName: 'key', name: 'key', transformer: TypeTransformer_1.default.to('string') },
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('KeyValueItems') },
                ];
                return this.makeRequest('GetKeyValueItems', request, [reqMapper, respMapper]);
            },
            /**
             * Gets all the keys of key-value pairs.
             */
            getKeyValueKeys: (request) => {
                const reqMapper = [
                    {
                        rawName: 'application_id',
                        name: 'applicationId',
                        transformer: TypeTransformer_1.default.to('number'),
                    },
                    { rawName: 'key', name: 'key', transformer: TypeTransformer_1.default.to('string') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                    {
                        rawName: 'application_name',
                        name: 'applicationName',
                        transformer: TypeTransformer_1.default.to('string'),
                    },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('KeyValueKeys') },
                ];
                return this.makeRequest('GetKeyValueKeys', request, [reqMapper, respMapper]);
            },
        };
        this.Invoices = {
            /**
             * Gets all invoices of the specified USD or EUR account.
             */
            getAccountInvoices: (request) => {
                const reqMapper = [
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.to('number') },
                    { rawName: 'offset', name: 'offset', transformer: TypeTransformer_1.default.to('number') },
                ];
                const respMapper = [
                    { rawName: 'result', name: 'result', transformer: TypeTransformer_1.default.from('AccountInvoice') },
                    { rawName: 'total_count', name: 'totalCount', transformer: TypeTransformer_1.default.from('number') },
                    { rawName: 'count', name: 'count', transformer: TypeTransformer_1.default.from('number') },
                ];
                return this.makeRequest('GetAccountInvoices', request, [reqMapper, respMapper]);
            },
        };
        this.key = key;
    }
    generateAuthHeader() {
        const date = (+new Date() / 1000) | 0;
        const tokenData = { iss: this.key.account_id, iat: date, exp: date + 64 };
        const token = jwt.sign(tokenData, this.key.private_key, {
            algorithm: 'RS256',
            header: { kid: this.key.key_id },
        });
        const authHeader = 'Bearer ' + token;
        return authHeader;
    }
    makeRequest(request, requestData, transformer) {
        return __awaiter(this, void 0, void 0, function* () {
            const form = new FormData();
            form.append('cmd', request);
            Object.keys(requestData).forEach((field) => {
                const cTransformer = transformer[0].find((tt) => tt.name === field);
                if (cTransformer) {
                    form.append(cTransformer.rawName, cTransformer.transformer(requestData[field]));
                }
                else {
                    form.append(field, requestData[field]);
                }
            });
            const host = this.host || 'api.voximplant.com';
            const response = yield axios_1.default.post("https://" + host + "/platform_api", form, {
                headers: Object.assign(Object.assign({}, form.getHeaders()), { Authorization: this.generateAuthHeader() }),
            });
            if (response.data && response.data.errors) {
                throw response.data.errors;
            }
            const returnData = {};
            Object.keys(response.data).forEach((field) => {
                const cTransformer = transformer[1].find((tt) => tt.rawName === field);
                if (cTransformer) {
                    returnData[cTransformer.name] = cTransformer.transformer(response.data[field]);
                }
                else {
                    returnData[field] = response.data[field];
                }
            });
            return returnData;
        });
    }
}
module.exports = VoximplantApiClient;
