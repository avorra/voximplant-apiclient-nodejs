import { AccountsInterface, ApplicationsInterface, UsersInterface, CallListsInterface, ScenariosInterface, RulesInterface, HistoryInterface, PSTNBlacklistInterface, SIPWhiteListInterface, SIPRegistrationInterface, PhoneNumbersInterface, CallerIDsInterface, OutboundTestNumbersInterface, QueuesInterface, SmartQueueInterface, SkillsInterface, AdminUsersInterface, AdminRolesInterface, AuthorizedIPsInterface, RegulationAddressInterface, PushCredentialsInterface, DialogflowCredentialsInterface, SMSInterface, RecordStoragesInterface, RoleSystemInterface, KeyValueStorageInterface, InvoicesInterface } from './Interfaces';
interface ApiKey {
    account_email: string;
    account_id: number;
    key_id: string;
    private_key: string;
}
declare class VoximplantApiClient {
    private host?;
    private key;
    constructor(key: ApiKey, host?: string);
    generateAuthHeader(): string;
    private makeRequest;
    Accounts: AccountsInterface;
    Applications: ApplicationsInterface;
    Users: UsersInterface;
    CallLists: CallListsInterface;
    Scenarios: ScenariosInterface;
    Rules: RulesInterface;
    History: HistoryInterface;
    PSTNBlacklist: PSTNBlacklistInterface;
    SIPWhiteList: SIPWhiteListInterface;
    SIPRegistration: SIPRegistrationInterface;
    PhoneNumbers: PhoneNumbersInterface;
    CallerIDs: CallerIDsInterface;
    OutboundTestNumbers: OutboundTestNumbersInterface;
    Queues: QueuesInterface;
    SmartQueue: SmartQueueInterface;
    Skills: SkillsInterface;
    AdminUsers: AdminUsersInterface;
    AdminRoles: AdminRolesInterface;
    AuthorizedIPs: AuthorizedIPsInterface;
    RegulationAddress: RegulationAddressInterface;
    PushCredentials: PushCredentialsInterface;
    DialogflowCredentials: DialogflowCredentialsInterface;
    SMS: SMSInterface;
    RecordStorages: RecordStoragesInterface;
    RoleSystem: RoleSystemInterface;
    KeyValueStorage: KeyValueStorageInterface;
    Invoices: InvoicesInterface;
}
export = VoximplantApiClient;
