"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIErrorCode = void 0;
var APIErrorCode;
(function (APIErrorCode) {
    /**
     * Fatal error
     */
    APIErrorCode[APIErrorCode["FATAL_ERROR"] = 1] = "FATAL_ERROR";
    /**
     * Internal error
     */
    APIErrorCode[APIErrorCode["INTERNAL_ERROR"] = 2] = "INTERNAL_ERROR";
    /**
     * DB error
     */
    APIErrorCode[APIErrorCode["DB_ERROR"] = 4] = "DB_ERROR";
    /**
     * Billing failed
     */
    APIErrorCode[APIErrorCode["BILLING_ERROR"] = 5] = "BILLING_ERROR";
    /**
     * Cannot generate the unique 'api_key'
     */
    APIErrorCode[APIErrorCode["API_KEY_GENERATION_FAILURE"] = 6] = "API_KEY_GENERATION_FAILURE";
    /**
     * Activation mail error
     */
    APIErrorCode[APIErrorCode["ACTIVATION_MAIL_ERROR"] = 9] = "ACTIVATION_MAIL_ERROR";
    /**
     * Cannot generate the unique 'session_id'
     */
    APIErrorCode[APIErrorCode["SESSION_ID_GENERATION_ERROR"] = 10] = "SESSION_ID_GENERATION_ERROR";
    /**
     * Invalid 'func_name' parameter
     */
    APIErrorCode[APIErrorCode["INVALID_FUNC_NAME"] = 12] = "INVALID_FUNC_NAME";
    /**
     * The 'config' table error
     */
    APIErrorCode[APIErrorCode["INTERNAL_CONFIGURATION_ERROR"] = 13] = "INTERNAL_CONFIGURATION_ERROR";
    /**
     * SMS gateway error
     */
    APIErrorCode[APIErrorCode["SMS_GATEWAY_ERROR"] = 14] = "SMS_GATEWAY_ERROR";
    /**
     * Media server error
     */
    APIErrorCode[APIErrorCode["MEDIA_SERVER_ERROR"] = 15] = "MEDIA_SERVER_ERROR";
    /**
     * Media balancer error
     */
    APIErrorCode[APIErrorCode["MEDIA_BALANCER_ERROR"] = 16] = "MEDIA_BALANCER_ERROR";
    /**
     * Paypoint failed
     */
    APIErrorCode[APIErrorCode["PAYPOINT_ERROR"] = 17] = "PAYPOINT_ERROR";
    /**
     * CallerID verification server error
     */
    APIErrorCode[APIErrorCode["CALLERID_VERIFICATION_ERROR"] = 18] = "CALLERID_VERIFICATION_ERROR";
    /**
     * ACD failed
     */
    APIErrorCode[APIErrorCode["ACD_FAILED"] = 19] = "ACD_FAILED";
    /**
     * Phone provider failed
     */
    APIErrorCode[APIErrorCode["PHONE_PROVIDER_FAILED"] = 20] = "PHONE_PROVIDER_FAILED";
    /**
     * Call service failed
     */
    APIErrorCode[APIErrorCode["CALL_SERVICE_FAILED"] = 21] = "CALL_SERVICE_FAILED";
    /**
     * Conference balancer error
     */
    APIErrorCode[APIErrorCode["CONFERENCE_BALANCER_ERROR"] = 22] = "CONFERENCE_BALANCER_ERROR";
    /**
     * Conference server error
     */
    APIErrorCode[APIErrorCode["CONFERENCE_SERVER_ERROR"] = 23] = "CONFERENCE_SERVER_ERROR";
    /**
     * Authorization failed
     */
    APIErrorCode[APIErrorCode["AUTHORIZATION_FAILED"] = 100] = "AUTHORIZATION_FAILED";
    /**
     * Invalid arguments
     */
    APIErrorCode[APIErrorCode["INVALID_ARGUMENTS"] = 101] = "INVALID_ARGUMENTS";
    /**
     * Missing 'cmd' parameter
     */
    APIErrorCode[APIErrorCode["MISSING_CMD"] = 102] = "MISSING_CMD";
    /**
     * Unknown command
     */
    APIErrorCode[APIErrorCode["UNKNOWN_COMMAND"] = 103] = "UNKNOWN_COMMAND";
    /**
     * Forbidden command
     */
    APIErrorCode[APIErrorCode["FORBIDDEN_COMMAND"] = 104] = "FORBIDDEN_COMMAND";
    /**
     * The required output format type is not supported
     */
    APIErrorCode[APIErrorCode["REQUIRED_OUTPUT_FORMAT_TYPE_IS_NOT_SUPPORTED"] = 105] = "REQUIRED_OUTPUT_FORMAT_TYPE_IS_NOT_SUPPORTED";
    /**
     * Account's name is not unique
     */
    APIErrorCode[APIErrorCode["ACCOUNTS_NAME_ALREADY_USED"] = 106] = "ACCOUNTS_NAME_ALREADY_USED";
    /**
     * Invalid application name
     */
    APIErrorCode[APIErrorCode["INVALID_APPLICATION_NAME"] = 107] = "INVALID_APPLICATION_NAME";
    /**
     * Exceeded the application count limit per account
     */
    APIErrorCode[APIErrorCode["APPLICATION_COUNT_EXCEEDED"] = 108] = "APPLICATION_COUNT_EXCEEDED";
    /**
     * Exceeded the user count limit per account
     */
    APIErrorCode[APIErrorCode["USER_COUNT_EXCEEDED"] = 109] = "USER_COUNT_EXCEEDED";
    /**
     * Invalid plan
     */
    APIErrorCode[APIErrorCode["INVALID_PLAN"] = 110] = "INVALID_PLAN";
    /**
     * Invalid date format
     */
    APIErrorCode[APIErrorCode["INVALID_DATE_FORMAT"] = 111] = "INVALID_DATE_FORMAT";
    /**
     * The password must be at least 6 characters long
     */
    APIErrorCode[APIErrorCode["PASSWORD_LENGTH"] = 112] = "PASSWORD_LENGTH";
    /**
     * Account's name must be at least 5 and up to 20 characters long
     */
    APIErrorCode[APIErrorCode["ACCOUNT_NAME_LENGTH"] = 113] = "ACCOUNT_NAME_LENGTH";
    /**
     * Account's name should start with a letter and can contain latin characters, digits, hyphen
     */
    APIErrorCode[APIErrorCode["ACCOUNT_NAME_INITIAL_LETTER"] = 114] = "ACCOUNT_NAME_INITIAL_LETTER";
    /**
     * The 'account_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ACCOUNT_ID"] = 115] = "INVALID_ACCOUNT_ID";
    /**
     * The 'application_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_APPLICATION_ID"] = 116] = "INVALID_APPLICATION_ID";
    /**
     * The 'user_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_USER_ID"] = 117] = "INVALID_USER_ID";
    /**
     * The user name is not unique
     */
    APIErrorCode[APIErrorCode["USER_NAME_ISNT_UNIQUE"] = 118] = "USER_NAME_ISNT_UNIQUE";
    /**
     * Invalid phone number
     */
    APIErrorCode[APIErrorCode["INVALID_PHONE_NUMBER"] = 121] = "INVALID_PHONE_NUMBER";
    /**
     * The user name should start with a letter or digit and can contain latin characters, digits, hyphen and must be at least 5 characters long
     */
    APIErrorCode[APIErrorCode["USER_NAME_RESTRICTIONS"] = 122] = "USER_NAME_RESTRICTIONS";
    /**
     * Invalid date range
     */
    APIErrorCode[APIErrorCode["INVALID_DATE_RANGE"] = 123] = "INVALID_DATE_RANGE";
    /**
     * Invalid money amount
     */
    APIErrorCode[APIErrorCode["INVALID_MONEY_AMOUNT"] = 125] = "INVALID_MONEY_AMOUNT";
    /**
     * Insufficient money
     */
    APIErrorCode[APIErrorCode["INSUFFICIENT_MONEY"] = 127] = "INSUFFICIENT_MONEY";
    /**
     * Account's email is not unique
     */
    APIErrorCode[APIErrorCode["ACCOUNTS_EMAIL_ISNT_UNIQUE"] = 128] = "ACCOUNTS_EMAIL_ISNT_UNIQUE";
    /**
     * Application name is not unique
     */
    APIErrorCode[APIErrorCode["APPLICATION_NAME_ISNT_UNIQUE"] = 129] = "APPLICATION_NAME_ISNT_UNIQUE";
    /**
     * The script text is too long
     */
    APIErrorCode[APIErrorCode["SCRIPT_TEXT_IS_TOO_LONG"] = 130] = "SCRIPT_TEXT_IS_TOO_LONG";
    /**
     * The account is not activated
     */
    APIErrorCode[APIErrorCode["ACCOUNT_ISNT_ACTIVATED"] = 131] = "ACCOUNT_ISNT_ACTIVATED";
    /**
     * The 'scenario_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SCENARIO_ID"] = 132] = "INVALID_SCENARIO_ID";
    /**
     * The scenario name is not unique
     */
    APIErrorCode[APIErrorCode["SCENARIO_NAME_ISNT_UNIQUE"] = 133] = "SCENARIO_NAME_ISNT_UNIQUE";
    /**
     * Required parameter is empty
     */
    APIErrorCode[APIErrorCode["REQUIRED_IS_EMPTY"] = 134] = "REQUIRED_IS_EMPTY";
    /**
     * Session timeout
     */
    APIErrorCode[APIErrorCode["SESSION_TIMEOUT"] = 135] = "SESSION_TIMEOUT";
    /**
     * Invalid email
     */
    APIErrorCode[APIErrorCode["INVALID_EMAIL"] = 136] = "INVALID_EMAIL";
    /**
     * The account is not logged
     */
    APIErrorCode[APIErrorCode["ACCOUNT_ISNT_LOGGED"] = 137] = "ACCOUNT_ISNT_LOGGED";
    /**
     * Activation is over for the phone number
     */
    APIErrorCode[APIErrorCode["ACTIVATION_IS_OVER_FOR_THE_PHONE_NUMBER"] = 139] = "ACTIVATION_IS_OVER_FOR_THE_PHONE_NUMBER";
    /**
     * Exceeded the max SMS code entering attempts
     */
    APIErrorCode[APIErrorCode["EXCEEDED_THE_MAX_SMS_CODE_ENTERING_ATTEMPTS"] = 140] = "EXCEEDED_THE_MAX_SMS_CODE_ENTERING_ATTEMPTS";
    /**
     * The 'sms_code' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SMS_CODE"] = 141] = "INVALID_SMS_CODE";
    /**
     * Activation is not required
     */
    APIErrorCode[APIErrorCode["ACTIVATION_IS_NOT_REQUIRED"] = 142] = "ACTIVATION_IS_NOT_REQUIRED";
    /**
     * The 'rule_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_RULE_ID"] = 147] = "INVALID_RULE_ID";
    /**
     * The 'rule_pattern' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_RULE_PATTERN"] = 148] = "INVALID_RULE_PATTERN";
    /**
     * The 'rule_pattern_exclude' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_RULE_PATTERN_EXCLUDE"] = 149] = "INVALID_RULE_PATTERN_EXCLUDE";
    /**
     * The 'call_session_history_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CALL_SESSION_HISTORY_ID"] = 150] = "INVALID_CALL_SESSION_HISTORY_ID";
    /**
     * Rejected payment request
     */
    APIErrorCode[APIErrorCode["REJECTED_PAYMENT_REQUEST"] = 151] = "REJECTED_PAYMENT_REQUEST";
    /**
     * No bank card
     */
    APIErrorCode[APIErrorCode["NO_BANK_CARD"] = 152] = "NO_BANK_CARD";
    /**
     * The card payment amount must be greater than 10$
     */
    APIErrorCode[APIErrorCode["CARD_PAYMENT_AMOUNT_MUST_BE_GREATER_THAN_10"] = 153] = "CARD_PAYMENT_AMOUNT_MUST_BE_GREATER_THAN_10";
    /**
     * The 'min_balance' must be greater than 1 $
     */
    APIErrorCode[APIErrorCode["MIN_BALANCE_MUST_BE_GREATER_THAN_1"] = 154] = "MIN_BALANCE_MUST_BE_GREATER_THAN_1";
    /**
     * The 'card_overrun_value' must be greater than 10$
     */
    APIErrorCode[APIErrorCode["CARD_OVERRUN_VALUE_MUST_BE_GREATER_THAN_10"] = 155] = "CARD_OVERRUN_VALUE_MUST_BE_GREATER_THAN_10";
    /**
     * The 'rule_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_RULE_NAME"] = 156] = "INVALID_RULE_NAME";
    /**
     * The 'user_display_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_USER_DISPLAY_NAME"] = 157] = "INVALID_USER_DISPLAY_NAME";
    /**
     * The 'card_holder' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CARD_HOLDER"] = 158] = "INVALID_CARD_HOLDER";
    /**
     * The 'acct' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ACCT"] = 159] = "INVALID_ACCT";
    /**
     * The 'cvv' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CVV"] = 160] = "INVALID_CVV";
    /**
     * The 'session_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SESSION_ID"] = 161] = "INVALID_SESSION_ID";
    /**
     * try later..
     */
    APIErrorCode[APIErrorCode["TRY_LATER"] = 162] = "TRY_LATER";
    /**
     * The 'account_first_name' parameter length must be less than 50
     */
    APIErrorCode[APIErrorCode["ACCOUNT_FIRST_NAME_TOO_LONG"] = 163] = "ACCOUNT_FIRST_NAME_TOO_LONG";
    /**
     * The 'account_last_name' parameter length must be less than 50
     */
    APIErrorCode[APIErrorCode["ACCOUNT_LAST_NAME_TOO_LONG"] = 164] = "ACCOUNT_LAST_NAME_TOO_LONG";
    /**
     * Exceeded the max SMS sending attempts
     */
    APIErrorCode[APIErrorCode["EXCEEDED_THE_MAX_SMS_SENDING_ATTEMPTS"] = 165] = "EXCEEDED_THE_MAX_SMS_SENDING_ATTEMPTS";
    /**
     * Repeat SMS sending after 3 minutes
     */
    APIErrorCode[APIErrorCode["REPEAT_SMS_SENDING_AFTER_3_MINUTES"] = 166] = "REPEAT_SMS_SENDING_AFTER_3_MINUTES";
    /**
     * The 'activation_method' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ACTIVATION_METHOD"] = 167] = "INVALID_ACTIVATION_METHOD";
    /**
     * The 'scenario_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SCENARIO_NAME"] = 168] = "INVALID_SCENARIO_NAME";
    /**
     * The 'sip_whitelist_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SIP_WHITELIST_ID"] = 169] = "INVALID_SIP_WHITELIST_ID";
    /**
     * The 'sip_whitelist_network' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SIP_WHITELIST_NETWORK"] = 170] = "INVALID_SIP_WHITELIST_NETWORK";
    /**
     * The 'min_balance' must be less than 50 $
     */
    APIErrorCode[APIErrorCode["MIN_BALANCE_MUST_BE_LESS_THAN_50"] = 171] = "MIN_BALANCE_MUST_BE_LESS_THAN_50";
    /**
     * Exceeded the SIP white list network count limit per account
     */
    APIErrorCode[APIErrorCode["SIP_WHITE_LIST_NETWORK_COUNT_EXCEEDED"] = 172] = "SIP_WHITE_LIST_NETWORK_COUNT_EXCEEDED";
    /**
     * The account name is forbidden by the black list. Try another name
     */
    APIErrorCode[APIErrorCode["ACCOUNT_NAME_FORBIDDEN"] = 173] = "ACCOUNT_NAME_FORBIDDEN";
    /**
     * The 'rule_name' is not unique
     */
    APIErrorCode[APIErrorCode["DUPLICATE_RULE_NAME"] = 175] = "DUPLICATE_RULE_NAME";
    /**
     * The 'parent_account_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PARENT_ACCOUNT_ID"] = 177] = "INVALID_PARENT_ACCOUNT_ID";
    /**
     * The 'excluded_user_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_EXCLUDED_USER_ID"] = 180] = "INVALID_EXCLUDED_USER_ID";
    /**
     * The 'phone_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PHONE_ID"] = 181] = "INVALID_PHONE_ID";
    /**
     * Occupied phone number
     */
    APIErrorCode[APIErrorCode["OCCUPIED_PHONE_NUMBER"] = 182] = "OCCUPIED_PHONE_NUMBER";
    /**
     * The 'callerid_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CALLERID_ID"] = 183] = "INVALID_CALLERID_ID";
    /**
     * The 'callerid_number' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CALLERID_NUMBER"] = 184] = "INVALID_CALLERID_NUMBER";
    /**
     * Forbidden CallerID
     */
    APIErrorCode[APIErrorCode["FORBIDDEN_CALLERID"] = 185] = "FORBIDDEN_CALLERID";
    /**
     * The 'verification_code' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_VERIFICATION_CODE"] = 414] = "INVALID_VERIFICATION_CODE";
    /**
     * The 'callerid_number' is not unique
     */
    APIErrorCode[APIErrorCode["DUPLICATE_CALLERID_NUMBER"] = 188] = "DUPLICATE_CALLERID_NUMBER";
    /**
     * The 'mobile_phone' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_MOBILE_PHONE"] = 203] = "INVALID_MOBILE_PHONE";
    /**
     * The 'to_number' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_TO_NUMBER"] = 190] = "INVALID_TO_NUMBER";
    /**
     * The 'from_number' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_FROM_NUMBER"] = 191] = "INVALID_FROM_NUMBER";
    /**
     * The 'sms_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SMS_ID"] = 192] = "INVALID_SMS_ID";
    /**
     * The 'child_account_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CHILD_ACCOUNT_ID"] = 194] = "INVALID_CHILD_ACCOUNT_ID";
    /**
     * Unsupported batch command
     */
    APIErrorCode[APIErrorCode["UNSUPPORTED_BATCH_COMMAND"] = 195] = "UNSUPPORTED_BATCH_COMMAND";
    /**
     * Too many batch commands. The max command count is 50 per batch
     */
    APIErrorCode[APIErrorCode["TOO_MANY_BATCH_COMMANDS"] = 196] = "TOO_MANY_BATCH_COMMANDS";
    /**
     * The 'transaction_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_TRANSACTION_ID"] = 197] = "INVALID_TRANSACTION_ID";
    /**
     * The 'child_account_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CHILD_ACCOUNT_NAME"] = 198] = "INVALID_CHILD_ACCOUNT_NAME";
    /**
     * The 'child_account_email' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CHILD_ACCOUNT_EMAIL"] = 199] = "INVALID_CHILD_ACCOUNT_EMAIL";
    /**
     * The 'new_child_account_email' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_NEW_CHILD_ACCOUNT_EMAIL"] = 201] = "INVALID_NEW_CHILD_ACCOUNT_EMAIL";
    /**
     * The 'language_code' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_LANGUAGE_CODE"] = 202] = "INVALID_LANGUAGE_CODE";
    /**
     * The 'billing_address_country_code' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_BILLING_ADDRESS_COUNTRY_CODE"] = 204] = "INVALID_BILLING_ADDRESS_COUNTRY_CODE";
    /**
     * The 'billing_address_name' parameter length must be less than 200
     */
    APIErrorCode[APIErrorCode["BILLING_ADDRESS_NAME_TOO_LONG"] = 205] = "BILLING_ADDRESS_NAME_TOO_LONG";
    /**
     * The 'billing_address_address' parameter length must be less than 512
     */
    APIErrorCode[APIErrorCode["BILLING_ADDRESS_ADDRESS_TOO_LONG"] = 206] = "BILLING_ADDRESS_ADDRESS_TOO_LONG";
    /**
     * The 'billing_address_zip' parameter length must be less than 30
     */
    APIErrorCode[APIErrorCode["BILLING_ADDRESS_ZIP_TOO_LONG"] = 207] = "BILLING_ADDRESS_ZIP_TOO_LONG";
    /**
     * The 'billing_address_phone' parameter length must be less than 30
     */
    APIErrorCode[APIErrorCode["BILLING_ADDRESS_PHONE_TOO_LONG"] = 208] = "BILLING_ADDRESS_PHONE_TOO_LONG";
    /**
     * The 'transaction_type' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_TRANSACTION_TYPE"] = 209] = "INVALID_TRANSACTION_TYPE";
    /**
     * The 'currency' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CURRENCY"] = 210] = "INVALID_CURRENCY";
    /**
     * The 'account_custom_data' parameter length must be less than 8192
     */
    APIErrorCode[APIErrorCode["ACCOUNT_CUSTOM_DATA_TOO_LONG"] = 211] = "ACCOUNT_CUSTOM_DATA_TOO_LONG";
    /**
     * The 'user_custom_data' parameter length must be less than 8192
     */
    APIErrorCode[APIErrorCode["USER_CUSTOM_DATA_TOO_LONG"] = 212] = "USER_CUSTOM_DATA_TOO_LONG";
    /**
     * The 'acd_queue_name' parameter length must be less than 100
     */
    APIErrorCode[APIErrorCode["ACD_QUEUE_NAME_TOO_LONG"] = 213] = "ACD_QUEUE_NAME_TOO_LONG";
    /**
     * The 'service_probability' parameter value must be in range [0.5 ... 1]
     */
    APIErrorCode[APIErrorCode["INVALID_SERVICE_PROBABILITY"] = 214] = "INVALID_SERVICE_PROBABILITY";
    /**
     * The 'max_queue_size' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_MAX_QUEUE_SIZE"] = 215] = "INVALID_MAX_QUEUE_SIZE";
    /**
     * The 'max_waiting_time' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_MAX_WAITING_TIME"] = 216] = "INVALID_MAX_WAITING_TIME";
    /**
     * The 'average_service_time' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_AVERAGE_SERVICE_TIME"] = 217] = "INVALID_AVERAGE_SERVICE_TIME";
    /**
     * The 'acd_queue_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ACD_QUEUE_ID"] = 218] = "INVALID_ACD_QUEUE_ID";
    /**
     * Queue's name is not unique
     */
    APIErrorCode[APIErrorCode["DUPLICATE_QUEUES_NAME"] = 219] = "DUPLICATE_QUEUES_NAME";
    /**
     * The 'skill_name' parameter length must be less than 512
     */
    APIErrorCode[APIErrorCode["SKILL_NAME_TOO_LONG"] = 220] = "SKILL_NAME_TOO_LONG";
    /**
     * Skill's name is not unique
     */
    APIErrorCode[APIErrorCode["DUPLICATE_SKILL_NAME"] = 221] = "DUPLICATE_SKILL_NAME";
    /**
     * The 'skill_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SKILL_ID"] = 222] = "INVALID_SKILL_ID";
    /**
     * The 'acd_queue_priority' parameter should be positive
     */
    APIErrorCode[APIErrorCode["INVALID_ACD_QUEUE_PRIORITY"] = 223] = "INVALID_ACD_QUEUE_PRIORITY";
    /**
     * The 'excluded_skill_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_EXCLUDED_SKILL_ID"] = 224] = "INVALID_EXCLUDED_SKILL_ID";
    /**
     * The 'amount' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_AMOUNT"] = 225] = "INVALID_AMOUNT";
    /**
     * The payment amount is very low. The amount must be greater than N
     */
    APIErrorCode[APIErrorCode["PAYMENT_AMOUNT_TOO_LOW"] = 226] = "PAYMENT_AMOUNT_TOO_LOW";
    /**
     * The 'acd_status' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ACD_STATUS"] = 227] = "INVALID_ACD_STATUS";
    /**
     * The 'aggregation' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_AGGREGATION"] = 228] = "INVALID_AGGREGATION";
    /**
     * The 'report' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_REPORT"] = 229] = "INVALID_REPORT";
    /**
     * Account password change is over. Try later
     */
    APIErrorCode[APIErrorCode["ACCOUNT_PASSWORD_CHANGE_TEMPORARY_BLOCKED"] = 230] = "ACCOUNT_PASSWORD_CHANGE_TEMPORARY_BLOCKED";
    /**
     * No more attempts to enter code
     */
    APIErrorCode[APIErrorCode["CODE_ENTRY_ATTEMPTS_EXHAUSTED"] = 231] = "CODE_ENTRY_ATTEMPTS_EXHAUSTED";
    /**
     * The 'code' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CODE"] = 232] = "INVALID_CODE";
    /**
     * The 'date' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_DATE"] = 233] = "INVALID_DATE";
    /**
     * The 'account_transaction_description' parameter length must be less than 120
     */
    APIErrorCode[APIErrorCode["ACCOUNT_TRANSACTION_DESCRIPTION_TOO_LONG"] = 234] = "ACCOUNT_TRANSACTION_DESCRIPTION_TOO_LONG";
    /**
     * The 'user_transaction_description' parameter length must be less than 120
     */
    APIErrorCode[APIErrorCode["USER_TRANSACTION_DESCRIPTION_TOO_LONG"] = 235] = "USER_TRANSACTION_DESCRIPTION_TOO_LONG";
    /**
     * The 'parent_transaction_description' parameter length must be less than 120
     */
    APIErrorCode[APIErrorCode["PARENT_TRANSACTION_DESCRIPTION_TOO_LONG"] = 236] = "PARENT_TRANSACTION_DESCRIPTION_TOO_LONG";
    /**
     * The 'child_transaction_description' parameter length must be less than 120
     */
    APIErrorCode[APIErrorCode["CHILD_TRANSACTION_DESCRIPTION_TOO_LONG"] = 237] = "CHILD_TRANSACTION_DESCRIPTION_TOO_LONG";
    /**
     * The 'country_code' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_COUNTRY_CODE"] = 239] = "INVALID_COUNTRY_CODE";
    /**
     * The 'phone_category_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PHONE_CATEGORY_NAME"] = 240] = "INVALID_PHONE_CATEGORY_NAME";
    /**
     * The 'phone_region_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PHONE_REGION_ID"] = 241] = "INVALID_PHONE_REGION_ID";
    /**
     * The 'country_state' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_COUNTRY_STATE"] = 242] = "INVALID_COUNTRY_STATE";
    /**
     * The 'phone_count' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PHONE_COUNT"] = 243] = "INVALID_PHONE_COUNT";
    /**
     * The 'subscription_template_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SUBSCRIPTION_TEMPLATE_ID"] = 244] = "INVALID_SUBSCRIPTION_TEMPLATE_ID";
    /**
     * The 'subscription_template_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SUBSCRIPTION_TEMPLATE_NAME"] = 245] = "INVALID_SUBSCRIPTION_TEMPLATE_NAME";
    /**
     * The 'subscription_template_type' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SUBSCRIPTION_TEMPLATE_TYPE"] = 246] = "INVALID_SUBSCRIPTION_TEMPLATE_TYPE";
    /**
     * The 'prioriity' parameter is invaid
     */
    APIErrorCode[APIErrorCode["INVALID_PRIORIITY"] = 247] = "INVALID_PRIORIITY";
    /**
     * The 'max_simultaneous' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_MAX_SIMULTANEOUS"] = 248] = "INVALID_MAX_SIMULTANEOUS";
    /**
     * The 'num_attempts' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_NUM_ATTEMPTS"] = 249] = "INVALID_NUM_ATTEMPTS";
    /**
     * Invalid CSV file
     */
    APIErrorCode[APIErrorCode["INVALID_CSV_FILE"] = 250] = "INVALID_CSV_FILE";
    /**
     * Call service error
     */
    APIErrorCode[APIErrorCode["CALL_SERVICE_ERROR"] = 251] = "CALL_SERVICE_ERROR";
    /**
     * Error response from call service
     */
    APIErrorCode[APIErrorCode["ERROR_RESPONSE_FROM_CALL_SERVICE"] = 252] = "ERROR_RESPONSE_FROM_CALL_SERVICE";
    /**
     * The 'name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_NAME"] = 253] = "INVALID_NAME";
    /**
     * The 'group' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_GROUP"] = 254] = "INVALID_GROUP";
    /**
     * The 'list_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_LIST_ID"] = 255] = "INVALID_LIST_ID";
    /**
     * The 'reference_ip' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_REFERENCE_IP"] = 257] = "INVALID_REFERENCE_IP";
    /**
     * The 'to_phone_next_renewal' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_TO_PHONE_NEXT_RENEWAL"] = 258] = "INVALID_TO_PHONE_NEXT_RENEWAL";
    /**
     * The 'media_url' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_MEDIA_URL"] = 259] = "INVALID_MEDIA_URL";
    /**
     * Access to the media link is denied
     */
    APIErrorCode[APIErrorCode["MEDIA_LINK_ACCESS_DENIED"] = 260] = "MEDIA_LINK_ACCESS_DENIED";
    /**
     * The 'record_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_RECORD_ID"] = 261] = "INVALID_RECORD_ID";
    /**
     * The 'PaRes' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PARES"] = 262] = "INVALID_PARES";
    /**
     * The 'MD' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_MD"] = 263] = "INVALID_MD";
    /**
     * The 'private' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PRIVATE"] = 264] = "INVALID_PRIVATE";
    /**
     * The 'promo_code' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PROMO_CODE"] = 265] = "INVALID_PROMO_CODE";
    /**
     * The promo code is expired
     */
    APIErrorCode[APIErrorCode["PROMO_CODE_IS_EXPIRED"] = 266] = "PROMO_CODE_IS_EXPIRED";
    /**
     * The promo code has been already redeemed
     */
    APIErrorCode[APIErrorCode["PROMO_CODE_HAS_BEEN_ALREADY_REDEEMED"] = 267] = "PROMO_CODE_HAS_BEEN_ALREADY_REDEEMED";
    /**
     * The second promo code activation is forbidden
     */
    APIErrorCode[APIErrorCode["PROMO_CODE_ALREADY_USED"] = 268] = "PROMO_CODE_ALREADY_USED";
    /**
     * The 'conference_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CONFERENCE_NAME"] = 269] = "INVALID_CONFERENCE_NAME";
    /**
     * The 'conference_name' parameter length must be less than 50
     */
    APIErrorCode[APIErrorCode["CONFERENCE_NAME_TOO_LONG"] = 270] = "CONFERENCE_NAME_TOO_LONG";
    /**
     * The service level threshold count must be less than 5
     */
    APIErrorCode[APIErrorCode["SERVICE_LEVEL_THRESHOLD_COUNT_TOO_BIG"] = 271] = "SERVICE_LEVEL_THRESHOLD_COUNT_TOO_BIG";
    /**
     * Exceeded the maximum possible number of SIP registrations
     */
    APIErrorCode[APIErrorCode["SIP_REGISTRATIONS_COUNT_EXCEEDED"] = 272] = "SIP_REGISTRATIONS_COUNT_EXCEEDED";
    /**
     * The 'username' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_USERNAME"] = 273] = "INVALID_USERNAME";
    /**
     * The 'proxy' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PROXY"] = 274] = "INVALID_PROXY";
    /**
     * The 'registration_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_REGISTRATION_ID"] = 275] = "INVALID_REGISTRATION_ID";
    /**
     * The 'account_document' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ACCOUNT_DOCUMENT"] = 278] = "INVALID_ACCOUNT_DOCUMENT";
    /**
     * Repeat an account document sending after 2 minutes
     */
    APIErrorCode[APIErrorCode["RESEND_DOCUMENTS"] = 280] = "RESEND_DOCUMENTS";
    /**
     * Account verification required
     */
    APIErrorCode[APIErrorCode["ACCOUNT_VERIFICATION_REQUIRED"] = 281] = "ACCOUNT_VERIFICATION_REQUIRED";
    /**
     * Account verification in progress
     */
    APIErrorCode[APIErrorCode["ACCOUNT_VERIFICATION_IN_PROGRESS"] = 282] = "ACCOUNT_VERIFICATION_IN_PROGRESS";
    /**
     * The 'to_purchase_date' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_TO_PURCHASE_DATE"] = 283] = "INVALID_TO_PURCHASE_DATE";
    /**
     * The 'admin_user_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ADMIN_USER_ID"] = 284] = "INVALID_ADMIN_USER_ID";
    /**
     * The 'required_admin_user_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_REQUIRED_ADMIN_USER_ID"] = 285] = "INVALID_REQUIRED_ADMIN_USER_ID";
    /**
     * The 'required_admin_user_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_REQUIRED_ADMIN_USER_NAME"] = 286] = "INVALID_REQUIRED_ADMIN_USER_NAME";
    /**
     * The admin user name length must be less than 50
     */
    APIErrorCode[APIErrorCode["ADMIN_USER_NAME_TOO_LONG"] = 287] = "ADMIN_USER_NAME_TOO_LONG";
    /**
     * The 'admin_user_display_name' parameter length must be less than 255
     */
    APIErrorCode[APIErrorCode["ADMIN_USER_DISPLAY_NAME_TOO_LONG"] = 288] = "ADMIN_USER_DISPLAY_NAME_TOO_LONG";
    /**
     * Exceeded the admin user count limit per account
     */
    APIErrorCode[APIErrorCode["ADMIN_USER_COUNT_LIMIT_EXCEEDED"] = 289] = "ADMIN_USER_COUNT_LIMIT_EXCEEDED";
    /**
     * The admin_user_name is not unique
     */
    APIErrorCode[APIErrorCode["DUPLICATE_ADMIN_USER_NAME"] = 290] = "DUPLICATE_ADMIN_USER_NAME";
    /**
     * The 'admin_role_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ADMIN_ROLE_ID"] = 291] = "INVALID_ADMIN_ROLE_ID";
    /**
     * The 'admin_role_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ADMIN_ROLE_NAME"] = 292] = "INVALID_ADMIN_ROLE_NAME";
    /**
     * The admin role name length must be less than 160
     */
    APIErrorCode[APIErrorCode["ADMIN_ROLE_NAME_TOO_LONG"] = 293] = "ADMIN_ROLE_NAME_TOO_LONG";
    /**
     * The admin_role_name is not unique
     */
    APIErrorCode[APIErrorCode["DUPLICATE_ADMIN_ROLE_NAME"] = 294] = "DUPLICATE_ADMIN_ROLE_NAME";
    /**
     * Exceeded the admin role count limit per account
     */
    APIErrorCode[APIErrorCode["ADMIN_ROLE_COUNT_LIMIT_IS_EXCEEDED"] = 295] = "ADMIN_ROLE_COUNT_LIMIT_IS_EXCEEDED";
    /**
     * The 'allowed_entries' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ALLOWED_ENTRIES"] = 296] = "INVALID_ALLOWED_ENTRIES";
    /**
     * The 'denied_entries' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_DENIED_ENTRIES"] = 297] = "INVALID_DENIED_ENTRIES";
    /**
     * The 'like_admin_role_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_LIKE_ADMIN_ROLE_ID"] = 300] = "INVALID_LIKE_ADMIN_ROLE_ID";
    /**
     * The 'included_admin_role_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_INCLUDED_ADMIN_ROLE_ID"] = 301] = "INVALID_INCLUDED_ADMIN_ROLE_ID";
    /**
     * The 'excluded_admin_role_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_EXCLUDED_ADMIN_ROLE_ID"] = 302] = "INVALID_EXCLUDED_ADMIN_ROLE_ID";
    /**
     * The 'payment_reference' parameter is ambiguous
     */
    APIErrorCode[APIErrorCode["PAYMENT_REFERENCE_IS_AMBIGUOUS"] = 303] = "PAYMENT_REFERENCE_IS_AMBIGUOUS";
    /**
     * The 'payment_reference' parameter length must be less than 127
     */
    APIErrorCode[APIErrorCode["PAYMENT_REFERENCE_TOO_LONG"] = 304] = "PAYMENT_REFERENCE_TOO_LONG";
    /**
     * The 'inn' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_INN"] = 305] = "INVALID_INN";
    /**
     * The 'kpp' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_KPP"] = 306] = "INVALID_KPP";
    /**
     * The 'company_name' parameter length must be less than 512
     */
    APIErrorCode[APIErrorCode["COMPANY_NAME_TOO_LONG"] = 307] = "COMPANY_NAME_TOO_LONG";
    /**
     * The 'company_address' parameter length must be less than 512
     */
    APIErrorCode[APIErrorCode["COMPANY_ADDRESS_TOO_LONG"] = 308] = "COMPANY_ADDRESS_TOO_LONG";
    /**
     * The 'company_phone' parameter length must be less than 20
     */
    APIErrorCode[APIErrorCode["COMPANY_PHONE_TOO_LONG"] = 309] = "COMPANY_PHONE_TOO_LONG";
    /**
     * Forbidden to edit the contractor. Please send an email to the Voximplant team instead
     */
    APIErrorCode[APIErrorCode["CONTRACTOR_EDIT_FORBIDDEN"] = 310] = "CONTRACTOR_EDIT_FORBIDDEN";
    /**
     * Please set the contractor info first
     */
    APIErrorCode[APIErrorCode["CONTRACTOR_INFO_NOT_SET"] = 311] = "CONTRACTOR_INFO_NOT_SET";
    /**
     * The 'old_invoice_number' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_OLD_INVOICE_NUMBER"] = 319] = "INVALID_OLD_INVOICE_NUMBER";
    /**
     * Concurrent resource limit exceeded
     */
    APIErrorCode[APIErrorCode["CONCURRENT_RESOURCE_LIMIT_EXCEEDED"] = 314] = "CONCURRENT_RESOURCE_LIMIT_EXCEEDED";
    /**
     * The requested resource parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_REQUESTED_RESOURCE"] = 315] = "INVALID_REQUESTED_RESOURCE";
    /**
     * The requested resource parameter is forbidden
     */
    APIErrorCode[APIErrorCode["REQUESTED_RESOURCE_IS_FORBIDDEN"] = 316] = "REQUESTED_RESOURCE_IS_FORBIDDEN";
    /**
     * Upgrade to a paid account to use the requested resource parameter
     */
    APIErrorCode[APIErrorCode["ACCOUNT_UPGRADE_REQUIRED"] = 317] = "ACCOUNT_UPGRADE_REQUIRED";
    /**
     * The money amount must be greater than N RUR
     */
    APIErrorCode[APIErrorCode["MONEY_AMOUNT_TOO_LOW"] = 318] = "MONEY_AMOUNT_TOO_LOW";
    /**
     * The 'authorized_ip' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_AUTHORIZED_IP"] = 320] = "INVALID_AUTHORIZED_IP";
    /**
     * The authorized IP is not found
     */
    APIErrorCode[APIErrorCode["AUTHORIZED_IP_NOT_FOUND"] = 321] = "AUTHORIZED_IP_NOT_FOUND";
    /**
     * The 'contains_ip' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CONTAINS_IP"] = 322] = "INVALID_CONTAINS_IP";
    /**
     * Exceeded the authorized IP count limit per account
     */
    APIErrorCode[APIErrorCode["IP_WHITELIST_EXCEEDED"] = 323] = "IP_WHITELIST_EXCEEDED";
    /**
     * The 'verification_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_VERIFICATION_NAME"] = 324] = "INVALID_VERIFICATION_NAME";
    /**
     * The 'to_unverified_hold_until' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_TO_UNVERIFIED_HOLD_UNTIL"] = 325] = "INVALID_TO_UNVERIFIED_HOLD_UNTIL";
    /**
     * The 'verification_status' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_VERIFICATION_STATUS"] = 326] = "INVALID_VERIFICATION_STATUS";
    /**
     * Error parsing XLS file
     */
    APIErrorCode[APIErrorCode["ERROR_PARSING_XLS_FILE"] = 327] = "ERROR_PARSING_XLS_FILE";
    /**
     * No phones in the stock
     */
    APIErrorCode[APIErrorCode["NO_PHONES_IN_STOCK"] = 331] = "NO_PHONES_IN_STOCK";
    /**
     * Insufficient phones in the stock, available N
     */
    APIErrorCode[APIErrorCode["INSUFFICIENT_PHONES"] = 332] = "INSUFFICIENT_PHONES";
    /**
     * Country's region is not found by code
     */
    APIErrorCode[APIErrorCode["NOT_FOUND_COUNTRYS_REGION_BY_CODE"] = 334] = "NOT_FOUND_COUNTRYS_REGION_BY_CODE";
    /**
     * Phone number already exists
     */
    APIErrorCode[APIErrorCode["PHONE_NUMBER_ALREADY_EXISTS"] = 335] = "PHONE_NUMBER_ALREADY_EXISTS";
    /**
     * Ambiguous region
     */
    APIErrorCode[APIErrorCode["AMBIGUOUS_REGION"] = 336] = "AMBIGUOUS_REGION";
    /**
     * User documents are not found
     */
    APIErrorCode[APIErrorCode["USER_DOCUMENTS_NOT_FOUND"] = 337] = "USER_DOCUMENTS_NOT_FOUND";
    /**
     * Verification user's document already complete
     */
    APIErrorCode[APIErrorCode["VERIFICATION_USERS_DOCUMENT_ALREADY_COMPLETE"] = 338] = "VERIFICATION_USERS_DOCUMENT_ALREADY_COMPLETE";
    /**
     * User documents do not exist
     */
    APIErrorCode[APIErrorCode["NO_USER_DOCUMENTS"] = 339] = "NO_USER_DOCUMENTS";
    /**
     * Rate limit exceed
     */
    APIErrorCode[APIErrorCode["RATE_LIMIT_EXCEED"] = 340] = "RATE_LIMIT_EXCEED";
    /**
     * Record is not found by ID
     */
    APIErrorCode[APIErrorCode["RECORD_NOT_FOUND"] = 341] = "RECORD_NOT_FOUND";
    /**
     * The 'individual_full_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_INDIVIDUAL_FULL_NAME"] = 343] = "INVALID_INDIVIDUAL_FULL_NAME";
    /**
     * The 'individual_birth_date' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_INDIVIDUAL_BIRTH_DATE"] = 344] = "INVALID_INDIVIDUAL_BIRTH_DATE";
    /**
     * The 'individual_passport_series' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_INDIVIDUAL_PASSPORT_SERIES"] = 345] = "INVALID_INDIVIDUAL_PASSPORT_SERIES";
    /**
     * The 'individual_passport_number' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_INDIVIDUAL_PASSPORT_NUMBER"] = 346] = "INVALID_INDIVIDUAL_PASSPORT_NUMBER";
    /**
     * The 'individual_passport_issue_date' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_INDIVIDUAL_PASSPORT_ISSUE_DATE"] = 347] = "INVALID_INDIVIDUAL_PASSPORT_ISSUE_DATE";
    /**
     * The 'individual_passport_issued_by' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_INDIVIDUAL_PASSPORT_ISSUED_BY"] = 348] = "INVALID_INDIVIDUAL_PASSPORT_ISSUED_BY";
    /**
     * The 'individual_registration_address' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_INDIVIDUAL_REGISTRATION_ADDRESS"] = 349] = "INVALID_INDIVIDUAL_REGISTRATION_ADDRESS";
    /**
     * The 'legal_entry_full_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_LEGAL_ENTRY_FULL_NAME"] = 350] = "INVALID_LEGAL_ENTRY_FULL_NAME";
    /**
     * The 'legal_entry_phone' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_LEGAL_ENTRY_PHONE"] = 351] = "INVALID_LEGAL_ENTRY_PHONE";
    /**
     * The 'legal_entry_address' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_LEGAL_ENTRY_ADDRESS"] = 352] = "INVALID_LEGAL_ENTRY_ADDRESS";
    /**
     * The 'legal_entry_actual_address' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_LEGAL_ENTRY_ACTUAL_ADDRESS"] = 353] = "INVALID_LEGAL_ENTRY_ACTUAL_ADDRESS";
    /**
     * The 'ogrn' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_OGRN"] = 354] = "INVALID_OGRN";
    /**
     * The 'call_history_report_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CALL_HISTORY_REPORT_ID"] = 355] = "INVALID_CALL_HISTORY_REPORT_ID";
    /**
     * The call history report is not ready yet
     */
    APIErrorCode[APIErrorCode["CALL_HISTORY_REPORT_IN_PROGRESS"] = 356] = "CALL_HISTORY_REPORT_IN_PROGRESS";
    /**
     * The call history report generation failed
     */
    APIErrorCode[APIErrorCode["CALL_HISTORY_REPORT_GENERATION_FAILED"] = 357] = "CALL_HISTORY_REPORT_GENERATION_FAILED";
    /**
     * Invalid verification type
     */
    APIErrorCode[APIErrorCode["INVALID_VERIFICATION_TYPE"] = 358] = "INVALID_VERIFICATION_TYPE";
    /**
     * Invalid salutation
     */
    APIErrorCode[APIErrorCode["INVALID_SALUTATION"] = 359] = "INVALID_SALUTATION";
    /**
     * Voxbone verification type is not found
     */
    APIErrorCode[APIErrorCode["VERIFICATION_TYPE_NOT_FOUND"] = 360] = "VERIFICATION_TYPE_NOT_FOUND";
    /**
     * Proof of address is not found
     */
    APIErrorCode[APIErrorCode["PROOF_OF_ADDRESS_NOT_FOUND"] = 361] = "PROOF_OF_ADDRESS_NOT_FOUND";
    /**
     * The 'new_admin_user_name' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_NEW_ADMIN_USER_NAME"] = 362] = "INVALID_NEW_ADMIN_USER_NAME";
    /**
     * The 'code' parameter (access token) is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CODE_OR_ACCESS_TOKEN"] = 363] = "INVALID_CODE_OR_ACCESS_TOKEN";
    /**
     * The current account password is missing
     */
    APIErrorCode[APIErrorCode["CURRENT_ACCOUNT_PASSWORD_NOT_SPECIFIED"] = 364] = "CURRENT_ACCOUNT_PASSWORD_NOT_SPECIFIED";
    /**
     * Purchase info is not found
     */
    APIErrorCode[APIErrorCode["PURCHASE_INFO_NOT_FOUND"] = 365] = "PURCHASE_INFO_NOT_FOUND";
    /**
     * Pending address validation
     */
    APIErrorCode[APIErrorCode["PENDING_ADDRESS_VALIDATION"] = 366] = "PENDING_ADDRESS_VALIDATION";
    /**
     * The 'callback_type' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CALLBACK_TYPE"] = 367] = "INVALID_CALLBACK_TYPE";
    /**
     * Phone provider error
     */
    APIErrorCode[APIErrorCode["PHONE_PROVIDER_ERROR"] = 368] = "PHONE_PROVIDER_ERROR";
    /**
     * Incorrect parameter 'phone_owner_region_code'
     */
    APIErrorCode[APIErrorCode["INVALID_PHONE_OWNER_REGION_CODE"] = 369] = "INVALID_PHONE_OWNER_REGION_CODE";
    /**
     * Incorrect parameter 'phone_owner_region_code' or 'phone_owner_zip_code'
     */
    APIErrorCode[APIErrorCode["INVALID_REGION_CODE"] = 370] = "INVALID_REGION_CODE";
    /**
     * The 'history_type' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_HISTORY_TYPE"] = 371] = "INVALID_HISTORY_TYPE";
    /**
     * The 'pstn_blacklist_phone' parameter length must be less than 100
     */
    APIErrorCode[APIErrorCode["INVALID_PSTN_BLACKLIST_PHONE"] = 425] = "INVALID_PSTN_BLACKLIST_PHONE";
    /**
     * Exceeded the PSTN blacklist phones count limit per account
     */
    APIErrorCode[APIErrorCode["PSTN_BLACKLIST_SIZE_IS_EXCEEDED"] = 373] = "PSTN_BLACKLIST_SIZE_IS_EXCEEDED";
    /**
     * The 'carrier_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CARRIER_ID"] = 374] = "INVALID_CARRIER_ID";
    /**
     * No scenario is bound to the rule
     */
    APIErrorCode[APIErrorCode["RULE_NO_SCENARIO_BOUND"] = 375] = "RULE_NO_SCENARIO_BOUND";
    /**
     * The 'subscription_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SUBSCRIPTION_ID"] = 376] = "INVALID_SUBSCRIPTION_ID";
    /**
     * The phone group is incomplete
     */
    APIErrorCode[APIErrorCode["PHONE_GROUP_INCOMPLETE"] = 377] = "PHONE_GROUP_INCOMPLETE";
    /**
     * The 'push_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PUSH_ID"] = 378] = "INVALID_PUSH_ID";
    /**
     * Forbidden to change the account plan
     */
    APIErrorCode[APIErrorCode["ACCOUNT_PLAN_CHANGE_FORBIDDEN"] = 379] = "ACCOUNT_PLAN_CHANGE_FORBIDDEN";
    /**
     * The push provider is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PUSH_PROVIDER"] = 380] = "INVALID_PUSH_PROVIDER";
    /**
     * No application is bound to the queue
     */
    APIErrorCode[APIErrorCode["QUEUE_APPLICATION_NOT_BOUND"] = 381] = "QUEUE_APPLICATION_NOT_BOUND";
    /**
     * The 'server_type' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SERVER_TYPE"] = 382] = "INVALID_SERVER_TYPE";
    /**
     * The 'server_ip' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SERVER_IP"] = 383] = "INVALID_SERVER_IP";
    /**
     * Push credential has already been attached to an application
     */
    APIErrorCode[APIErrorCode["PUSH_CREDENTIAL_ALREADY_ATTACHED"] = 384] = "PUSH_CREDENTIAL_ALREADY_ATTACHED";
    /**
     * Sending sms error
     */
    APIErrorCode[APIErrorCode["SENDING_SMS_ERROR"] = 385] = "SENDING_SMS_ERROR";
    /**
     * SMS disabled for number
     */
    APIErrorCode[APIErrorCode["SMS_DISABLED_FOR_NUMBER"] = 386] = "SMS_DISABLED_FOR_NUMBER";
    /**
     * No bank card order
     */
    APIErrorCode[APIErrorCode["NO_BANK_CARD_ORDER"] = 389] = "NO_BANK_CARD_ORDER";
    /**
     * The card payment amount must be less than N
     */
    APIErrorCode[APIErrorCode["CARD_PAYMENT_AMOUNT_TOO_LARGE"] = 390] = "CARD_PAYMENT_AMOUNT_TOO_LARGE";
    /**
     * Exceeded the card payment limit
     */
    APIErrorCode[APIErrorCode["CARD_PAYMENT_LIMIT_IS_EXCEEDED"] = 391] = "CARD_PAYMENT_LIMIT_IS_EXCEEDED";
    /**
     * Please enter the captcha!
     */
    APIErrorCode[APIErrorCode["CAPTCHA_ERROR"] = 392] = "CAPTCHA_ERROR";
    /**
     * The user is not bound to the application
     */
    APIErrorCode[APIErrorCode["USER_NOT_BOUND_TO_THE_APPLICATION"] = 393] = "USER_NOT_BOUND_TO_THE_APPLICATION";
    /**
     * The SIP registration is persistent
     */
    APIErrorCode[APIErrorCode["SIP_REGISTRATION_IS_PERSISTENT"] = 394] = "SIP_REGISTRATION_IS_PERSISTENT";
    /**
     * The phone number is yours
     */
    APIErrorCode[APIErrorCode["PHONE_NUMBER_UNUSABLE"] = 395] = "PHONE_NUMBER_UNUSABLE";
    /**
     * The 'record_storage_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_RECORD_STORAGE_ID"] = 396] = "INVALID_RECORD_STORAGE_ID";
    /**
     * Exceeded the children account count limit per day
     */
    APIErrorCode[APIErrorCode["CHILDREN_ACCOUNT_COUNT_LIMIT_PER_DAY_IS_EXCEEDED"] = 397] = "CHILDREN_ACCOUNT_COUNT_LIMIT_PER_DAY_IS_EXCEEDED";
    /**
     * The 'callback_url' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CALLBACK_URL"] = 398] = "INVALID_CALLBACK_URL";
    /**
     * The 'callback_salt' parameter length must be less than 40
     */
    APIErrorCode[APIErrorCode["CALLBACK_SALT_INVALID"] = 399] = "CALLBACK_SALT_INVALID";
    /**
     * The 'pstn_blacklist_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PSTN_BLACKLIST_ID"] = 400] = "INVALID_PSTN_BLACKLIST_ID";
    /**
     * The 'advanced_filters' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_ADVANCED_FILTERS"] = 401] = "INVALID_ADVANCED_FILTERS";
    /**
     * The 'contact_id' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CONTACT_ID"] = 405] = "INVALID_CONTACT_ID";
    /**
     * The 'contact_data' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CONTACT_DATA"] = 406] = "INVALID_CONTACT_DATA";
    /**
     * The contact is not unique
     */
    APIErrorCode[APIErrorCode["DUPLICATE_CONTACT"] = 407] = "DUPLICATE_CONTACT";
    /**
     * The contact data must be at least 1 and up to 1024 characters long
     */
    APIErrorCode[APIErrorCode["CONTACT_DATA_INVALID"] = 408] = "CONTACT_DATA_INVALID";
    /**
     * The 'contact_type' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_CONTACT_TYPE"] = 409] = "INVALID_CONTACT_TYPE";
    /**
     * The 'notification_group' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_NOTIFICATION_GROUP"] = 410] = "INVALID_NOTIFICATION_GROUP";
    /**
     * Exceeded the contact count limit per account
     */
    APIErrorCode[APIErrorCode["CONTACT_COUNT_LIMIT_PER_ACCOUNT_IS_EXCEEDED"] = 411] = "CONTACT_COUNT_LIMIT_PER_ACCOUNT_IS_EXCEEDED";
    /**
     * The 'new_contact_data' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_NEW_CONTACT_DATA"] = 412] = "INVALID_NEW_CONTACT_DATA";
    /**
     * The 'new_contact_type' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_NEW_CONTACT_TYPE"] = 413] = "INVALID_NEW_CONTACT_TYPE";
    /**
     * The contact is already verified
     */
    APIErrorCode[APIErrorCode["CONTACT_IS_ALREADY_VERIFIED"] = 415] = "CONTACT_IS_ALREADY_VERIFIED";
    /**
     * Repeat after N seconds
     */
    APIErrorCode[APIErrorCode["RETRY_LATER"] = 416] = "RETRY_LATER";
    /**
     * The contact description must be at least 1 and up to 1024 characters long
     */
    APIErrorCode[APIErrorCode["INVALID_CONTACT_DESCRIPTION_LENGTH"] = 417] = "INVALID_CONTACT_DESCRIPTION_LENGTH";
    /**
     * The scenario count limit is exceeded
     */
    APIErrorCode[APIErrorCode["SCENARIO_COUNT_LIMIT_IS_EXCEEDED"] = 418] = "SCENARIO_COUNT_LIMIT_IS_EXCEEDED";
    /**
     * The scenario count limit per rule is exceeded
     */
    APIErrorCode[APIErrorCode["SCENARIO_COUNT_LIMIT_PER_RULE_IS_EXCEEDED"] = 419] = "SCENARIO_COUNT_LIMIT_PER_RULE_IS_EXCEEDED";
    /**
     * Multi subscription does not exist
     */
    APIErrorCode[APIErrorCode["MULTI_SUBSCRIPTION_DOESNT_EXISTS"] = 420] = "MULTI_SUBSCRIPTION_DOESNT_EXISTS";
    /**
     * Multi subscription does not exist for the specified numbers
     */
    APIErrorCode[APIErrorCode["MULTI_SUBSCRIPTION_DOESNT_EXIST_FOR_NUMBERS"] = 421] = "MULTI_SUBSCRIPTION_DOESNT_EXIST_FOR_NUMBERS";
    /**
     * The 'source' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_SOURCE"] = 422] = "INVALID_SOURCE";
    /**
     * The 'destination' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_DESTINATION"] = 423] = "INVALID_DESTINATION";
    /**
     * Provided regulation address cannot be used for numbers in the specified region
     */
    APIErrorCode[APIErrorCode["REGULATION_ADDRESS_AND_REGION_MISMATCH"] = 424] = "REGULATION_ADDRESS_AND_REGION_MISMATCH";
    /**
     * The 'plan_type' parameter is invalid
     */
    APIErrorCode[APIErrorCode["INVALID_PLAN_TYPE"] = 426] = "INVALID_PLAN_TYPE";
    /**
     * Invalid list type. Possible values are 'automatic' and 'manual'
     */
    APIErrorCode[APIErrorCode["INVALID_LIST_TYPE"] = 427] = "INVALID_LIST_TYPE";
    /**
     * Invalid status. Possible values are 'in progress', 'canceled' and 'completed'
     */
    APIErrorCode[APIErrorCode["INVALID_STATUS"] = 428] = "INVALID_STATUS";
    /**
     * The 'resource_type' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_RESOURCE_TYPE"] = 429] = "INVALID_RESOURCE_TYPE";
    /**
     * The 'price_group_name' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_PRICE_GROUP_NAME"] = 430] = "INVALID_PRICE_GROUP_NAME";
    /**
     * Invalid key id.
     */
    APIErrorCode[APIErrorCode["INVALID_KEY_ID"] = 433] = "INVALID_KEY_ID";
    /**
     * Invalid subuser id.
     */
    APIErrorCode[APIErrorCode["INVALID_SUB_USER_ID"] = 434] = "INVALID_SUB_USER_ID";
    /**
     * Invalid role set.
     */
    APIErrorCode[APIErrorCode["INVALID_ROLE_SET"] = 435] = "INVALID_ROLE_SET";
    /**
     * Sub user login is not unique.
     */
    APIErrorCode[APIErrorCode["SUB_USER_LOGIN_NOT_UNIQUE"] = 436] = "SUB_USER_LOGIN_NOT_UNIQUE";
    /**
     * Max number of keys exceeded.
     */
    APIErrorCode[APIErrorCode["MAX_NUMBER_OF_KEYS_EXCEEDED"] = 437] = "MAX_NUMBER_OF_KEYS_EXCEEDED";
    /**
     * Max number of subusers exceeded.
     */
    APIErrorCode[APIErrorCode["MAX_NUMBER_OF_SUB_USERS_EXCEEDED"] = 438] = "MAX_NUMBER_OF_SUB_USERS_EXCEEDED";
    /**
     * Subuser has at least one key with this roles.
     */
    APIErrorCode[APIErrorCode["SUB_USER_HAS_KEYS_WITH_ROLES_TO_REMOVE"] = 439] = "SUB_USER_HAS_KEYS_WITH_ROLES_TO_REMOVE";
    /**
     * The 'role_id' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_ROLE_ID"] = 440] = "INVALID_ROLE_ID";
    /**
     * The 'role_name' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_ROLE_NAME"] = 441] = "INVALID_ROLE_NAME";
    /**
     * The 'resource_discount_id' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_RESOURCE_DISCOUNT_ID"] = 442] = "INVALID_RESOURCE_DISCOUNT_ID";
    /**
     * The 'subscription_discount_id' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_SUBSCRIPTION_DISCOUNT_ID"] = 443] = "INVALID_SUBSCRIPTION_DISCOUNT_ID";
    /**
     * The 'target_price_calculation_account_id' is forbidden for user.
     */
    APIErrorCode[APIErrorCode["INVALID_TARGET_PRICE_CALCULATION_ACCOUNT_ID"] = 444] = "INVALID_TARGET_PRICE_CALCULATION_ACCOUNT_ID";
    /**
     * The 'subscription_periodic_fixed' must be greater than the base price.
     */
    APIErrorCode[APIErrorCode["INVALID_SUBSCRIPTION_PERIODIC_FIXED"] = 445] = "INVALID_SUBSCRIPTION_PERIODIC_FIXED";
    /**
     * The 'subscription_installation_fixed' must be greater than the base price.
     */
    APIErrorCode[APIErrorCode["INVALID_SUBSCRIPTION_INSTALLATION_FIXED"] = 446] = "INVALID_SUBSCRIPTION_INSTALLATION_FIXED";
    /**
     * Invalid token format.
     */
    APIErrorCode[APIErrorCode["INVALID_TOKEN_FORMAT"] = 447] = "INVALID_TOKEN_FORMAT";
    /**
     * Current subuser password is missing.
     */
    APIErrorCode[APIErrorCode["CURRENT_SUB_USER_PASSWORD_MISSING"] = 448] = "CURRENT_SUB_USER_PASSWORD_MISSING";
    /**
     * Using 'role_id' and 'role_name' at the same_time.
     */
    APIErrorCode[APIErrorCode["ROLE_ID_AND_ROLE_NAME_AT_THE_SAME_TIME"] = 449] = "ROLE_ID_AND_ROLE_NAME_AT_THE_SAME_TIME";
    /**
     * The 'mgp_template_id' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_MGP_TEMPLATE_ID"] = 450] = "INVALID_MGP_TEMPLATE_ID";
    /**
     * The account's tax rate ID must be the same as the MGP tax rate ID.
     */
    APIErrorCode[APIErrorCode["INVALID_ACCOUNT_TAX_RATE_ID"] = 451] = "INVALID_ACCOUNT_TAX_RATE_ID";
    /**
     * Subuser name must be at least 5 and up to 20 characters long.
     */
    APIErrorCode[APIErrorCode["INVALID_SUB_USER_NAME_LEN"] = 452] = "INVALID_SUB_USER_NAME_LEN";
    /**
     * Subuser name should start with a letter and can contain latin characters
     */
    APIErrorCode[APIErrorCode["INVALID_SUB_USER_NAME_SYMBOLS"] = 453] = "INVALID_SUB_USER_NAME_SYMBOLS";
    /**
     * The token TTL exceeds the maximum limit.
     */
    APIErrorCode[APIErrorCode["INVALID_TOKEN_TTL"] = 454] = "INVALID_TOKEN_TTL";
    /**
     * Token issued in the future.
     */
    APIErrorCode[APIErrorCode["TOKEN_ISSUED_IN_FUTURE"] = 455] = "TOKEN_ISSUED_IN_FUTURE";
    /**
     * The token has expired.
     */
    APIErrorCode[APIErrorCode["TOKEN_EXPIRED"] = 456] = "TOKEN_EXPIRED";
    /**
     * The 'min_payment_amount' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_MIN_PAYMENT_AMOUNT"] = 457] = "INVALID_MIN_PAYMENT_AMOUNT";
    /**
     * Specify only one of the following parameters: %1$s
     */
    APIErrorCode[APIErrorCode["ONLY_ONE_OF_PARAMETERS"] = 458] = "ONLY_ONE_OF_PARAMETERS";
    /**
     * Unknown report type.
     */
    APIErrorCode[APIErrorCode["UNKNOWN_REPORT_TYPE"] = 459] = "UNKNOWN_REPORT_TYPE";
    /**
     * The 'per_time' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["UNKNOWN_PERIOD"] = 460] = "UNKNOWN_PERIOD";
    /**
     * The 'resource id' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_RESOURCE_ID"] = 461] = "INVALID_RESOURCE_ID";
    /**
     * New user name should start with a letter or digit and can contain latin characters
     */
    APIErrorCode[APIErrorCode["INVALID_NEW_USER_NAME"] = 462] = "INVALID_NEW_USER_NAME";
    /**
     * Blank password is not allowed. Please specify a new password at least 8 characters long.
     */
    APIErrorCode[APIErrorCode["EMPTY_NEW_PASSWORD"] = 463] = "EMPTY_NEW_PASSWORD";
    /**
     * Password should be at least 8 characters long and contain uppercase characters (A-Z)
     */
    APIErrorCode[APIErrorCode["REQUIRED_CHARACTERS_NEW_PASSWORD"] = 464] = "REQUIRED_CHARACTERS_NEW_PASSWORD";
    /**
     * The 'dialogflow_key_id' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_DIALOGFLOW_KEY_ID"] = 465] = "INVALID_DIALOGFLOW_KEY_ID";
    /**
     * The 'billing_address_state' parameter length must be less than
     */
    APIErrorCode[APIErrorCode["INVALID_BILLING_ADDRESS_STATE_LEN"] = 466] = "INVALID_BILLING_ADDRESS_STATE_LEN";
    /**
     * The old contractor has a debt and cannot be changed
     */
    APIErrorCode[APIErrorCode["CONTRACTOR_WITH_DEBT"] = 467] = "CONTRACTOR_WITH_DEBT";
    /**
     * Cannot change the contractor because previous period is not closed
     */
    APIErrorCode[APIErrorCode["INVALID_CHANGE_CONTRACTOR_IN_PREV_PERIOD"] = 468] = "INVALID_CHANGE_CONTRACTOR_IN_PREV_PERIOD";
    /**
     * Invalid value specified for the ‘direction’ parameter. Allowed parameter values are: 'IN'
     */
    APIErrorCode[APIErrorCode["INVALID_SMS_DIRECTION_PARAMETER"] = 470] = "INVALID_SMS_DIRECTION_PARAMETER";
    /**
     * Cannot fetch the subscription templates for the current account as it does not support child account management.
     */
    APIErrorCode[APIErrorCode["CANT_GET_TEMPLATES_FOR_ACCOUNT"] = 471] = "CANT_GET_TEMPLATES_FOR_ACCOUNT";
    /**
     * The following agent parameters can not be found:
     */
    APIErrorCode[APIErrorCode["EMPTY_AGREEMENT_ARGUMENTS"] = 472] = "EMPTY_AGREEMENT_ARGUMENTS";
    /**
     * Operation denied for the current status of the document: %s.
     */
    APIErrorCode[APIErrorCode["INVALID_DOCUMENT_STATUS"] = 473] = "INVALID_DOCUMENT_STATUS";
    /**
     * The 'document_id' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_DOCUMENT_ID"] = 474] = "INVALID_DOCUMENT_ID";
    /**
     * The 'individual_phone_number' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_INDIVIDUAL_PHONE_NUMBER"] = 475] = "INVALID_INDIVIDUAL_PHONE_NUMBER";
    /**
     * The 'legal_status' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_LEGAL_STATUS"] = 476] = "INVALID_LEGAL_STATUS";
    /**
     * The \'%s\' parameter length must not exceed %d symbols.
     */
    APIErrorCode[APIErrorCode["LENGTH_EXCEEDED"] = 477] = "LENGTH_EXCEEDED";
    /**
     * The 'proxy_passport_series' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_PROXY_PASSPORT_SERIES"] = 478] = "INVALID_PROXY_PASSPORT_SERIES";
    /**
     * The 'proxy_passport_number' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_PROXY_PASSPORT_NUMBER"] = 479] = "INVALID_PROXY_PASSPORT_NUMBER";
    /**
     * Update failed. You cannot change your individual taxpayer number. To change it
     */
    APIErrorCode[APIErrorCode["CONTRACTOR_DATA_CONFLICTS_WITH_AGREEMENT"] = 480] = "CONTRACTOR_DATA_CONFLICTS_WITH_AGREEMENT";
    /**
     * The 'agreement' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_AGREEMENT_DOCUMENT"] = 481] = "INVALID_AGREEMENT_DOCUMENT";
    /**
     * Invalid MIME type.
     */
    APIErrorCode[APIErrorCode["INVALID_MIME_TYPE"] = 482] = "INVALID_MIME_TYPE";
    /**
     * Invalid email.
     */
    APIErrorCode[APIErrorCode["INVALID_AGREEMENT_EMAIL"] = 483] = "INVALID_AGREEMENT_EMAIL";
    /**
     * HTTP request is rejected due to probable automatic request resend. Try again later.
     */
    APIErrorCode[APIErrorCode["HTTP_REQUEST_REJECTED"] = 484] = "HTTP_REQUEST_REJECTED";
    /**
     * Specify the '%s' parameter
     */
    APIErrorCode[APIErrorCode["PARAMETER_CANT_BE_EMPTY"] = 485] = "PARAMETER_CANT_BE_EMPTY";
    /**
     * Specify the '%1$s' parameter.
     */
    APIErrorCode[APIErrorCode["PARAMETER_CANT_BE_EMPTY_EX"] = 485] = "PARAMETER_CANT_BE_EMPTY_EX";
    /**
     * Invalid 'bik' parameter value.
     */
    APIErrorCode[APIErrorCode["INVALID_BIK"] = 486] = "INVALID_BIK";
    /**
     * Invalid 'expense_account' parameter value.
     */
    APIErrorCode[APIErrorCode["INVALID_EXPENSE_ACCOUNT"] = 487] = "INVALID_EXPENSE_ACCOUNT";
    /**
     * Invalid 'correspondent_account' parameter value.
     */
    APIErrorCode[APIErrorCode["INVALID_CORRESPONDENT_ACCOUNT"] = 488] = "INVALID_CORRESPONDENT_ACCOUNT";
    /**
     * Cannot change the contractor in a closed period
     */
    APIErrorCode[APIErrorCode["INVALID_CHANGE_CONTRACTOR_IN_PERIOD"] = 489] = "INVALID_CHANGE_CONTRACTOR_IN_PERIOD";
    /**
     * Not found selected contractor
     */
    APIErrorCode[APIErrorCode["INVALID_CONTRATOR"] = 490] = "INVALID_CONTRATOR";
    /**
     * The '%1$s' must be greater than %3$s%4$s.
     */
    APIErrorCode[APIErrorCode["LOW_AMOUNT"] = 491] = "LOW_AMOUNT";
    /**
     * The '%1$s' parameter is forbidden.
     */
    APIErrorCode[APIErrorCode["FORBIDDEN_PARAMETER"] = 492] = "FORBIDDEN_PARAMETER";
    /**
     * The '%1$s' is not unique.
     */
    APIErrorCode[APIErrorCode["VALUE_NOT_UNIQUE"] = 493] = "VALUE_NOT_UNIQUE";
    /**
     * The queues limit per application is exceeded.
     */
    APIErrorCode[APIErrorCode["SC_QUEUE_COUNT_LIMIT"] = 494] = "SC_QUEUE_COUNT_LIMIT";
    /**
     * The skill count limit per application is exceeded.";
     */
    APIErrorCode[APIErrorCode["SC_SKILL_COUNT_LIMIT"] = 495] = "SC_SKILL_COUNT_LIMIT";
    /**
     * The '%1$s' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID"] = 496] = "INVALID";
    /**
     * %2$s should be in range of %3$s..%4$s
     */
    APIErrorCode[APIErrorCode["INVALID_RANGE"] = 497] = "INVALID_RANGE";
    /**
     * Agent can be assigned up to 5 skills
     */
    APIErrorCode[APIErrorCode["MAX_AGENT_SKILLS_EXCEEDED"] = 498] = "MAX_AGENT_SKILLS_EXCEEDED";
    /**
     * The '%1$s' parameter length must be less than %3$s.
     */
    APIErrorCode[APIErrorCode["TOO_LONG"] = 499] = "TOO_LONG";
    /**
     * The 'partner_code' parameter length must be less than
     */
    APIErrorCode[APIErrorCode["INVALID_PARTNER_CODE_LENGTH"] = 500] = "INVALID_PARTNER_CODE_LENGTH";
    /**
     * File not found.
     */
    APIErrorCode[APIErrorCode["FILE_NOT_FOUND"] = 501] = "FILE_NOT_FOUND";
    /**
     * No routes for numbers %3$s in dst_numbers
     */
    APIErrorCode[APIErrorCode["NO_ROUTE_FOR_DST_NUMBERS"] = 506] = "NO_ROUTE_FOR_DST_NUMBERS";
    /**
     * The 'src_number' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_SRC_NUMBER"] = 507] = "INVALID_SRC_NUMBER";
    /**
     * The 'text' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_TEXT"] = 508] = "INVALID_TEXT";
    /**
     * A2P SMS disabled for number %1$s
     */
    APIErrorCode[APIErrorCode["A2P_SMS_DISABLED"] = 509] = "A2P_SMS_DISABLED";
    /**
     * Registration incomplete
     */
    APIErrorCode[APIErrorCode["REGISTRATION_INCOMPLETE"] = 511] = "REGISTRATION_INCOMPLETE";
    /**
     * '%1$s' parameter changes limit exceeded.
     */
    APIErrorCode[APIErrorCode["EXCEED"] = 512] = "EXCEED";
    /**
     * Unable to send an email
     */
    APIErrorCode[APIErrorCode["UNABLE_SEND_EMAIL"] = 513] = "UNABLE_SEND_EMAIL";
    /**
     * Account creation has already started
     */
    APIErrorCode[APIErrorCode["LOCKED"] = 514] = "LOCKED";
    /**
     * The same operation has been performed recently. Please
     */
    APIErrorCode[APIErrorCode["SAME_OPERATION_LIMIT"] = 515] = "SAME_OPERATION_LIMIT";
    /**
     * Payment in progress.
     */
    APIErrorCode[APIErrorCode["PAYMENT_IN_PROGRESS"] = 516] = "PAYMENT_IN_PROGRESS";
    /**
     * The combined length of the '%1$s' and '%2$s' parameters cannot be less than 6 characters.
     */
    APIErrorCode[APIErrorCode["INSUFFICIENT_PASSPORT_DATA_LENGTH"] = 517] = "INSUFFICIENT_PASSPORT_DATA_LENGTH";
    /**
     * Invalid SSL Certificate type. You have specified the VOIP provider type in your request but the certificate provided is not of type VoIP.
     */
    APIErrorCode[APIErrorCode["CERT_APPLE_INVALID"] = 518] = "CERT_APPLE_INVALID";
    /**
     * Invalid SSL Certificate type. You have provided the VOIP certificate type in your request but the provider specified is not of type VOIP.
     */
    APIErrorCode[APIErrorCode["CERT_APPLE_VOIP_INVALID"] = 519] = "CERT_APPLE_VOIP_INVALID";
    /**
     * SSL Certificate is expired. Expiration date: %s
     */
    APIErrorCode[APIErrorCode["CERT_EXPIRED"] = 520] = "CERT_EXPIRED";
    /**
     * SSL Certificate is not yet valid. Please check the \'Not Valid Before\' parameter in the certificate properties.
     */
    APIErrorCode[APIErrorCode["CERT_NOT_YET_VALID"] = 521] = "CERT_NOT_YET_VALID";
    /**
     * SSL Certificate does not support production mode. Please check the \'is_dev_mode\' parameter in your request.
     */
    APIErrorCode[APIErrorCode["CERT_PROD_MODE_NOT_SUPPORTED"] = 522] = "CERT_PROD_MODE_NOT_SUPPORTED";
    /**
     * Password is too weak
     */
    APIErrorCode[APIErrorCode["PASSWORD_TOO_WEAK"] = 523] = "PASSWORD_TOO_WEAK";
    /**
     * Password cannot contain spaces.
     */
    APIErrorCode[APIErrorCode["WHITESPACES_NOT_ALLOWED"] = 524] = "WHITESPACES_NOT_ALLOWED";
    /**
     * Grouping by user can be specified for %s reports only.
     */
    APIErrorCode[APIErrorCode["INAPPROPRIATE_AGENT_REPORTS"] = 525] = "INAPPROPRIATE_AGENT_REPORTS";
    /**
     * Grouping by queue can be specified for %s reports only.
     */
    APIErrorCode[APIErrorCode["INAPPROPRIATE_QUEUE_REPORTS"] = 526] = "INAPPROPRIATE_QUEUE_REPORTS";
    /**
     * Please make a request outside VPN.
     */
    APIErrorCode[APIErrorCode["VPN_IS_NOT_ALLOWED"] = 527] = "VPN_IS_NOT_ALLOWED";
    /**
     * Sms is not supported
     */
    APIErrorCode[APIErrorCode["NOT_SUPPORT_SMS"] = 528] = "NOT_SUPPORT_SMS";
    /**
     * The list of phone numbers for this category is not available.
     */
    APIErrorCode[APIErrorCode["PHONE_NUMBERS_LIST_IS_NOT_AVAILABLE"] = 529] = "PHONE_NUMBERS_LIST_IS_NOT_AVAILABLE";
    /**
     * Cannot get the number list for this category. Please
     */
    APIErrorCode[APIErrorCode["BUYING_BY_PHONE_NUMBER_IS_NOT_SUPPORTED"] = 530] = "BUYING_BY_PHONE_NUMBER_IS_NOT_SUPPORTED";
    /**
     * This phone category does not require a regulation address.
     */
    APIErrorCode[APIErrorCode["REGULATION_ADDRESS_NOT_REQUIRED"] = 531] = "REGULATION_ADDRESS_NOT_REQUIRED";
    /**
     * This regulation address does not require additional documents.
     */
    APIErrorCode[APIErrorCode["REGULATION_ADDRESS_NOT_REQUIRED_ADDITIONAL_DOCUMENTS"] = 532] = "REGULATION_ADDRESS_NOT_REQUIRED_ADDITIONAL_DOCUMENTS";
    /**
     * We do not accept cards issued outside Russian Federation.
     */
    APIErrorCode[APIErrorCode["ALFABANK_PAYMENT_BY_NOT_RUS_CARD_FORBIDDEN"] = 533] = "ALFABANK_PAYMENT_BY_NOT_RUS_CARD_FORBIDDEN";
    /**
     * Cannot find a proper email for receipts.
     */
    APIErrorCode[APIErrorCode["NO_EMAIL_FOR_RECEIPT"] = 534] = "NO_EMAIL_FOR_RECEIPT";
    /**
     * Please choose a password that you have not used before.
     */
    APIErrorCode[APIErrorCode["PASSWORD_WAS_ALREADY_USED"] = 535] = "PASSWORD_WAS_ALREADY_USED";
    /**
     * Cannot add or delete Authorized IPs because this setting is managed by your parent account.
     */
    APIErrorCode[APIErrorCode["PARENT_AUTHORIZED_IPS_USED"] = 536] = "PARENT_AUTHORIZED_IPS_USED";
    /**
     * Changing the email is only possible with password authentication.
     */
    APIErrorCode[APIErrorCode["ONLY_PASSWORD_AUTHENTICATION_FOR_EMAIL_CHANGING"] = 537] = "ONLY_PASSWORD_AUTHENTICATION_FOR_EMAIL_CHANGING";
    /**
     * Onboarding is currently in progress.
     */
    APIErrorCode[APIErrorCode["ONBOARDING_IN_PROGRESS"] = 538] = "ONBOARDING_IN_PROGRESS";
    /**
     * Update failed. No active onboarding process found.
     */
    APIErrorCode[APIErrorCode["ONBOARDING_NOT_STARTED"] = 539] = "ONBOARDING_NOT_STARTED";
    /**
     * This type of subscription has been already attached
     */
    APIErrorCode[APIErrorCode["COUNTABLE_SUBSCRIPTION_WAS_ALREADY_USED"] = 540] = "COUNTABLE_SUBSCRIPTION_WAS_ALREADY_USED";
    /**
     * Countable subscription must be in active status
     */
    APIErrorCode[APIErrorCode["COUNTABLE_SUBSCRIPTION_MUST_BE_IN_ACTIVE_STATUS"] = 541] = "COUNTABLE_SUBSCRIPTION_MUST_BE_IN_ACTIVE_STATUS";
    /**
     * The 'number_status' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_NUMBER_STATUS"] = 542] = "INVALID_NUMBER_STATUS";
    /**
     * The billing address is incorrect. Please check it and try again.
     */
    APIErrorCode[APIErrorCode["CAN_NOT_PAY_WITHOUT_VALID_ADDR"] = 543] = "CAN_NOT_PAY_WITHOUT_VALID_ADDR";
    /**
     * Invalid custom_record_storage_id.
     */
    APIErrorCode[APIErrorCode["INVALID_CUSTOM_RECORD_STORAGE_ID"] = 544] = "INVALID_CUSTOM_RECORD_STORAGE_ID";
    /**
     * Invalid 'host' parameter value.
     */
    APIErrorCode[APIErrorCode["INVALID_HOST_PARAMETER"] = 545] = "INVALID_HOST_PARAMETER";
    /**
     * Invalid Application IDs.
     */
    APIErrorCode[APIErrorCode["INVALID_APPLICATION_IDS"] = 546] = "INVALID_APPLICATION_IDS";
    /**
     * Test phone number already exists.
     */
    APIErrorCode[APIErrorCode["TEST_NUMBER_ALREADY_EXISTS"] = 547] = "TEST_NUMBER_ALREADY_EXISTS";
    /**
     * Test phone number does not exist.
     */
    APIErrorCode[APIErrorCode["TEST_NUMBER_NO_NUMBER"] = 548] = "TEST_NUMBER_NO_NUMBER";
    /**
     * Test phone number is already verified.
     */
    APIErrorCode[APIErrorCode["TEST_NUMBER_VERIFIED"] = 549] = "TEST_NUMBER_VERIFIED";
    /**
     * No attempts left to enter the verification code.
     */
    APIErrorCode[APIErrorCode["TEST_NUMBER_CODE_ATTEMPTS_LIMIT"] = 550] = "TEST_NUMBER_CODE_ATTEMPTS_LIMIT";
    /**
     * Please get a code first.
     */
    APIErrorCode[APIErrorCode["TEST_NUMBER_NO_CODE"] = 551] = "TEST_NUMBER_NO_CODE";
    /**
     * Wrong verification code.
     */
    APIErrorCode[APIErrorCode["TEST_NUMBER_WRONG_CODE"] = 552] = "TEST_NUMBER_WRONG_CODE";
    /**
     * No attempts left to verify this number.
     */
    APIErrorCode[APIErrorCode["TEST_NUMBER_VERIFICATION_LIMIT"] = 553] = "TEST_NUMBER_VERIFICATION_LIMIT";
    /**
     * You've reached the daily limit on verification calls
     */
    APIErrorCode[APIErrorCode["TEST_NUMBER_VERIFICATION_DAILY_LIMIT"] = 554] = "TEST_NUMBER_VERIFICATION_DAILY_LIMIT";
    /**
     * The 'verification_code' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_TEST_NUMBER_VERIFICATION_CODE"] = 555] = "INVALID_TEST_NUMBER_VERIFICATION_CODE";
    /**
     * You can add only 10 emails addresses.
     */
    APIErrorCode[APIErrorCode["EMAIL_COUNT_LIMIT"] = 556] = "EMAIL_COUNT_LIMIT";
    /**
     * Report is not found.
     */
    APIErrorCode[APIErrorCode["REPORT_NOT_FOUND"] = 557] = "REPORT_NOT_FOUND";
    /**
     * Application is not found.
     */
    APIErrorCode[APIErrorCode["APPLICATION_NOT_FOUND"] = 558] = "APPLICATION_NOT_FOUND";
    /**
     * Please enter a custom status that you have not used before.
     */
    APIErrorCode[APIErrorCode["SQ_CUSTOM_STATUS_ALREADY_EXISTS"] = 559] = "SQ_CUSTOM_STATUS_ALREADY_EXISTS";
    /**
     * We need your email address to send a receipt after payment.
     */
    APIErrorCode[APIErrorCode["EMPTY_BILLING_EMAIL"] = 560] = "EMPTY_BILLING_EMAIL";
    /**
     * You cannot use this currency with the current storage region. Please choose another currency or storage region.
     */
    APIErrorCode[APIErrorCode["MISMATCH_CURRENCY_AND_REGION"] = 561] = "MISMATCH_CURRENCY_AND_REGION";
    /**
     * You cannot call this function for custom record storages.
     */
    APIErrorCode[APIErrorCode["FORBIDDEN_LINK_REMOVING"] = 562] = "FORBIDDEN_LINK_REMOVING";
    /**
     * You cannot bind more than %1$s queues to an agent.
     */
    APIErrorCode[APIErrorCode["EXCEEDED_QUEUES_PER_AGENT_LIMIT"] = 563] = "EXCEEDED_QUEUES_PER_AGENT_LIMIT";
    /**
     * The 'price' parameter is invalid.
     */
    APIErrorCode[APIErrorCode["INVALID_SETTING_MGP_PRICE"] = 564] = "INVALID_SETTING_MGP_PRICE";
    /**
     * Setting MGP already exists.
     */
    APIErrorCode[APIErrorCode["SETTING_MGP_ALREADY_EXISTS"] = 565] = "SETTING_MGP_ALREADY_EXISTS";
    /**
     * Setting MGP does not exist.
     */
    APIErrorCode[APIErrorCode["SETTING_MGP_DOES_NOT_EXISTS"] = 566] = "SETTING_MGP_DOES_NOT_EXISTS";
    /**
     * Account MGP already exists.
     */
    APIErrorCode[APIErrorCode["ACCOUNT_MGP_ALREADY_EXISTS"] = 567] = "ACCOUNT_MGP_ALREADY_EXISTS";
    /**
     * Account MGP does not exist.
     */
    APIErrorCode[APIErrorCode["ACCOUNT_MGP_DOES_NOT_EXISTS"] = 568] = "ACCOUNT_MGP_DOES_NOT_EXISTS";
    /**
     * Date range must be within %1$d days.
     */
    APIErrorCode[APIErrorCode["DATE_RANGE_LIMIT"] = 569] = "DATE_RANGE_LIMIT";
    /**
     * The caller ID is already verified. You can extend the verification after %1$d day(s).
     */
    APIErrorCode[APIErrorCode["CALLER_ID_ALREADY_VERIFIED"] = 570] = "CALLER_ID_ALREADY_VERIFIED";
    /**
     * MGP template does not exist.
     */
    APIErrorCode[APIErrorCode["MGP_TEMPLATE_DOES_NOT_EXISTS"] = 571] = "MGP_TEMPLATE_DOES_NOT_EXISTS";
    /**
     * Address not found.
     */
    APIErrorCode[APIErrorCode["AVALARA_ADDR_NOT_FOUND"] = 572] = "AVALARA_ADDR_NOT_FOUND";
    /**
     * You cannot transfer funds to this user
     */
    APIErrorCode[APIErrorCode["USER_WITHOUT_SEPARATE_BILLING_ACCOUNT"] = 573] = "USER_WITHOUT_SEPARATE_BILLING_ACCOUNT";
    /**
     * Cannot verify your documents at phone numbers provider. %1$s
     */
    APIErrorCode[APIErrorCode["BICS_DOCUMENT_FILE_ERROR"] = 574] = "BICS_DOCUMENT_FILE_ERROR";
    /**
     * Required fields for phone number provider are missing or invalid. %1$s
     */
    APIErrorCode[APIErrorCode["BICS_MANDATORY_FIELDS_ERROR"] = 575] = "BICS_MANDATORY_FIELDS_ERROR";
    /**
     * Cannot buy the selected phone number. %1$s
     */
    APIErrorCode[APIErrorCode["BICS_NUMBERS_ERROR"] = 576] = "BICS_NUMBERS_ERROR";
    /**
     * Cannot request phone numbers request from the provider. Please contact support.
     */
    APIErrorCode[APIErrorCode["BICS_REQUEST_ERROR"] = 577] = "BICS_REQUEST_ERROR";
    /**
     * Phone number provider is temporarily unavailable. Please contact support.
     */
    APIErrorCode[APIErrorCode["BICS_SERVICE_UNAVAILABLE"] = 578] = "BICS_SERVICE_UNAVAILABLE";
    /**
     * Required address for phone number provider is invalid. %1$s
     */
    APIErrorCode[APIErrorCode["BICS_ADDRESS_ERROR"] = 579] = "BICS_ADDRESS_ERROR";
    /**
     * Cannot purchase the selected phone number. Please contact support.
     */
    APIErrorCode[APIErrorCode["BICS_ORDER_ERROR"] = 580] = "BICS_ORDER_ERROR";
    /**
     * No phone numbers available for the current request. Please contact support.
     */
    APIErrorCode[APIErrorCode["PHONE_PROVIDER_NO_SUCH_PRODUCT"] = 581] = "PHONE_PROVIDER_NO_SUCH_PRODUCT";
    /**
     * Specify a valid mobile number.
     */
    APIErrorCode[APIErrorCode["INVALID_PHONE_TO_PAYMENTS"] = 583] = "INVALID_PHONE_TO_PAYMENTS";
    /**
     * Specified phone number is rented. Please enter a personal phone number.
     */
    APIErrorCode[APIErrorCode["PHONE_IS_NOT_PERSONAL"] = 584] = "PHONE_IS_NOT_PERSONAL";
})(APIErrorCode = exports.APIErrorCode || (exports.APIErrorCode = {}));
