// Auto-generated types for steamapi-xpaw client library
// Source: https://steamapi.xpaw.me/

export interface SteamAPIOptions {
  /** Your Steam Web API Key */
  apiKey?: string;
  /** Alternate name for apiKey */
  key?: string;
  /** Your Steamworks Publisher Web API Key */
  partnerKey?: string;
  /** Steam Access Token for Store/Community APIs */
  accessToken?: string;
  /** Alternate name for accessToken */
  access_token?: string;
  /** Base URL for Steam Web API (default: https://api.steampowered.com) */
  baseUrl?: string;
  /** Response format (default: json) */
  format?: string;
  /** Additional custom HTTP headers to send with the request */
  headers?: Record<string, string>;
}

export interface IAccountCartService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddItemsToCart(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "user_country"?: string;
    /**  (Type: CAccountCart_AddItemsToCart_Request_ItemToAdd, Required: No) */
    "items"?: any;
    /**  (Type: CUserInterface_NavData, Required: No) */
    "navdata"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeleteCart(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCart(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "user_country"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetRelevantCoupons(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "language"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MergeShoppingCartContents(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gidshoppingcart"?: string | number;
    /**  (Type: string, Required: No) */
    "user_country"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ModifyLineItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "line_item_id"?: string | number;
    /**  (Type: string, Required: No) */
    "user_country"?: string;
    /**  (Type: CartGiftInfo, Required: No) */
    "gift_info"?: any;
    /**  (Type: AccountCartLineItemFlags, Required: No) */
    "flags"?: any;
    /**  (Type: uint64, Required: No) */
    "apply_gidcoupon"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveItemFromCart(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "line_item_id"?: string | number;
    /**  (Type: string, Required: No) */
    "user_country"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IAccountPrivacyService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCookiePreferences(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IAccountPrivateAppsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPrivateAppList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ToggleAppPrivacy(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: bool, Required: No) */
    "private"?: boolean;
    /**  (Type: int32[], Required: No) */
    "appids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IAssetSetPublishingService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddBranchToAssetSet(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "assetset_id"?: string | number;
    /**  (Type: string, Required: No) */
    "branch"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateAssetSet(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: CAssetSet, Required: No) */
    "assetset"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeleteAssetSet(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "assetset_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAllAssetSets(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveBranchFromAssetSet(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "assetset_id"?: string | number;
    /**  (Type: string, Required: No) */
    "branch"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SwapAssetSetPriority(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "first_assetset_id"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "second_assetset_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateAssetSet(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: CAssetSet, Required: No) */
    "assetset"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdatePublishTime(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "assetset_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IAuctionService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CancelBid(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "auctiondescriptionid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBidsForItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "auctiondescriptionid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBidsForUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "auctiondescriptionid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserBidForItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "auctiondescriptionid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PlaceBid(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "auctiondescriptionid"?: string | number;
    /**  (Type: int64, Required: No) */
    "amount_bid"?: string | number;
    /**  (Type: int32, Required: No) */
    "expected_amount_remaining"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IAuthenticationService {
  /**
   * start authentication process
   * 
   * Version: 1
   * HTTP Method: POST
   */
  BeginAuthSessionViaCredentials(params?: {
    /**  (Type: string, Required: Yes) */
    "device_friendly_name": string;
    /**  (Type: string, Required: Yes) */
    "account_name": string;
    /** password, RSA encrypted client side (Type: string, Required: Yes) */
    "encrypted_password": string;
    /** timestamp to map to a key - STime (Type: uint64, Required: Yes) */
    "encryption_timestamp": string | number;
    /** deprecated (Type: bool, Required: Yes) */
    "remember_login": boolean;
    /**  (Type: {enum}, Required: Yes) */
    "platform_type": any;
    /** whether we are requesting a persistent or an ephemeral session (Type: {enum}, Required: No) */
    "persistence"?: any;
    /** (EMachineAuthWebDomain) identifier of client requesting auth (Type: string, Required: No) */
    "website_id"?: string;
    /** User-supplied details about the device attempting to sign in (Type: {message}, Required: Yes) */
    "device_details": any;
    /** steam guard data for client login (Type: string, Required: Yes) */
    "guard_data": string;
    /**  (Type: uint32, Required: Yes) */
    "language": number;
    /** [ENetQOSLevel] client-specified priority for this auth attempt (Type: int32, Required: No) */
    "qos_level"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * start authentication process
   * 
   * Version: 1
   * HTTP Method: POST
   */
  BeginAuthSessionViaQR(params?: {
    /**  (Type: string, Required: Yes) */
    "device_friendly_name": string;
    /**  (Type: {enum}, Required: Yes) */
    "platform_type": any;
    /** User-supplied details about the device attempting to sign in (Type: {message}, Required: Yes) */
    "device_details": any;
    /** (EMachineAuthWebDomain) identifier of client requesting auth (Type: string, Required: No) */
    "website_id"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Enumerate durable (refresh) tokens for the given subject account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  EnumerateTokens(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: bool, Required: No) */
    "include_revoked"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Given a refresh token for a client app audience (e.g. desktop client / mobile client), generate an access token
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GenerateAccessTokenForApp(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "refresh_token"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: ETokenRenewalType, Required: No) */
    "renewal_type"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * get metadata of specific auth session, this will also implicitly bind the calling account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAuthSessionInfo(params?: {
    /** client ID from scanned QR Code, used for routing (Type: uint64, Required: Yes) */
    "client_id": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * get risk metadata for a specific auth session that has been deemed risky
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAuthSessionRiskInfo(params?: {
    /** client ID from scanned QR Code, used for routing (Type: uint64, Required: Yes) */
    "client_id": string | number;
    /** language for optimistic localization of geoloc data (Type: uint32, Required: Yes) */
    "language": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets all active auth sessions for an account for reference by the mobile app
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAuthSessionsForAccount(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Fetches RSA public key to use to encrypt passwords for a given account name
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPasswordRSAPublicKey(params?: {
    /** user-provided account name to get an RSA key for (Type: string, Required: Yes) */
    "account_name": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Migrates a WG token to an access and refresh token using a signature generated with the user's 2FA secret
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MigrateMobileSession(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steam ID of the user to migrate (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** WG Token to migrate (Type: string, Required: No) */
    "token"?: string;
    /** Signature over the wg token using the user's 2FA token (Type: string, Required: No) */
    "signature"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * notify the server about risk quiz responses for metrics purposes
   * 
   * Version: 1
   * HTTP Method: POST
   */
  NotifyRiskQuizResults(params?: {
    /** client ID for the auth session, used for routing (Type: uint64, Required: Yes) */
    "client_id": string | number;
    /** Whether or not the user correctly answered each risk quiz question (Type: {message}, Required: Yes) */
    "results": any;
    /** The action being taken selected by the user during the quiz (Type: string, Required: Yes) */
    "selected_action": string;
    /** Whether or not the user went on to confirm the login or not in the case of a passed quiz (Type: bool, Required: Yes) */
    "did_confirm_login": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * poll during authentication process
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PollAuthSessionStatus(params?: {
    /**  (Type: uint64, Required: Yes) */
    "client_id": string | number;
    /**  (Type: string, Required: Yes) */
    "request_id": string;
    /** If this is set to a token owned by this user, that token will be retired (Type: uint64, Required: Yes) */
    "token_to_revoke": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Mark the given refresh token as revoked
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RevokeRefreshToken(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "token_id"?: string | number;
    /** Token holder if an admin action on behalf of another user (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Select between logout and logout-and-forget-machine (Type: EAuthTokenRevokeAction, Required: No) */
    "revoke_action"?: any;
    /** required signature over token_id (Type: bytes, Required: No) */
    "signature"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Revoke a single token immediately, making it unable to renew or generate new access tokens
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RevokeToken(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "token"?: string;
    /** Select between logout and logout-and-forget-machine (Type: EAuthTokenRevokeAction, Required: No) */
    "revoke_action"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * approve an authentication session via mobile 2fa
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateAuthSessionWithMobileConfirmation(params?: {
    /** version field (Type: int32, Required: Yes) */
    "version": number;
    /** pending client ID, from scanned QR Code (Type: uint64, Required: Yes) */
    "client_id": string | number;
    /** user who wants to login (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** HMAC digest over {version,client_id,steamid} via user's private key (Type: string, Required: Yes) */
    "signature": string;
    /** Whether to confirm the login (true) or deny the login (false) (Type: bool, Required: No) */
    "confirm"?: boolean;
    /** whether we are requesting a persistent or an ephemeral session (Type: {enum}, Required: No) */
    "persistence"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * approve an authentication session via steam guard code
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateAuthSessionWithSteamGuardCode(params?: {
    /** pending client ID, from initialized session (Type: uint64, Required: Yes) */
    "client_id": string | number;
    /** user who wants to login (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** confirmation code (Type: string, Required: Yes) */
    "code": string;
    /** type of confirmation code (Type: {enum}, Required: Yes) */
    "code_type": any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IAuthenticationSupportService {
  /**
   * Gets the audit history for a user's auth token
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTokenHistory(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Token ID of the token to get history for (required) (Type: fixed64, Required: No) */
    "token_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MarkTokenCompromised(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "token_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Asks the server for a list of refresh tokens associated with an account
   * 
   * Version: 1
   * HTTP Method: GET
   */
  QueryRefreshTokenByID(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Token ID of the token to look up (required) (Type: fixed64, Required: No) */
    "token_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Asks the server for a list of refresh tokens associated with an account
   * 
   * Version: 1
   * HTTP Method: GET
   */
  QueryRefreshTokensByAccount(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of the account to query (required) (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Includes tokens that are revoked or expired in the query (Type: bool, Required: No) */
    "include_revoked_tokens"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Revokes a user's auth token
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RevokeToken(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Token ID of the token to revoke (required) (Type: fixed64, Required: No) */
    "token_id"?: string | number;
    /** Steam ID of the owner of that token (required) (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IBillingService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRecurringSubscriptionsCount(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IBroadcastService {
  /**
   * Gets broadcast upload stats for user
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcastUploadStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** How many at maximum to return. (Type: uint32, Required: No) */
    "row_limit"?: number;
    /** Start time (Type: uint32, Required: No) */
    "start_time"?: number;
    /** Optional relay upload ID - not compatible with session_id (Type: uint64, Required: No) */
    "upload_id"?: string | number;
    /** Optional the steamid whose stats you want, otherwise the user logged in - admin only (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Optional broadcast session ID - not compatiable with upload_id (Type: uint64, Required: No) */
    "session_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets viewer stats for given broadcast
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcastViewerStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Get stats for this stream (Type: uint64, Required: No) */
    "upload_id"?: string | number;
    /** Optional: The steamid of the broadcast whose details you are requesting. (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Start building a broadcast clip
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBuildClipStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "broadcast_clip_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get details for Broadcast Clips
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClipDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** List of clip IDs we want details for (Type: uint64, Required: No) */
    "broadcast_clip_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets RTMP broadcast info
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRTMPInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "ip"?: number;
    /** broadcaster steamID if not logged-in user (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Mute a user in your broadcast chat
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MuteBroadcastChatUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "chat_id"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "user_steamid"?: string | number;
    /**  (Type: bool, Required: No) */
    "muted"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Post chat message to specified chat room
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PostChatMessage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "chat_id"?: string | number;
    /**  (Type: string, Required: No) */
    "message"?: string;
    /**  (Type: uint32, Required: No) */
    "instance_id"?: number;
    /** ELanguage of the user posting the message, default is english (Type: ELanguage, Required: No) */
    "language"?: any;
    /** The two letter country code (Type: string, Required: No) */
    "country_code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Add a game meta data frame to broadcast
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  PostGameDataFrame(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: uint64, Required: Yes) */
    "broadcast_id": string | number;
    /**  (Type: string, Required: Yes) */
    "frame_data": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Add a game meta data frame to broadcast from a client. Uses RTMP token for validation
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PostGameDataFrameRTMP(params?: {
    /** AppID of the game being broadcasted (Type: uint32, Required: Yes) */
    "appid": number;
    /** Broadcasters SteamID (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Valid RTMP token for the Broadcaster (Type: string, Required: Yes) */
    "rtmp_token": string;
    /** game data frame expressing current state of game (string, zipped, whatever) (Type: string, Required: Yes) */
    "frame_data": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Tell all viewers to remove user chat text
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveUserChatText(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "chat_id"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "user_steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Updates a broadcast clip
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetClipDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Clip ID (Type: uint64, Required: No) */
    "broadcast_clip_id"?: string | number;
    /** start time of the clip (Type: uint32, Required: No) */
    "start_time"?: number;
    /** end time of the clip (Type: uint32, Required: No) */
    "end_time"?: number;
    /**  (Type: string, Required: No) */
    "video_description"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets RTMP broadcast info
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetRTMPInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: int32, Required: No) */
    "broadcast_permission"?: number;
    /**  (Type: bool, Required: No) */
    "update_token"?: boolean;
    /**  (Type: int32, Required: No) */
    "broadcast_delay"?: number;
    /**  (Type: uint32, Required: No) */
    "app_id"?: number;
    /**  (Type: uint32, Required: No) */
    "required_app_id"?: number;
    /** Who is permitted to send a chat message during broadcast (Type: EBroadcastChatPermission, Required: No) */
    "broadcast_chat_permission"?: any;
    /** Previous seconds we keep of the stream available (Type: int32, Required: No) */
    "broadcast_buffer"?: number;
    /** broadcaster steamID if not logged-in user (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Seconds required between chat messages (Type: uint32, Required: No) */
    "chat_rate_limit"?: number;
    /** Enable replay of last upload (Type: bool, Required: No) */
    "enable_replay"?: boolean;
    /** When true, then only steamwork partner can create chat messages. (Type: bool, Required: No) */
    "is_partner_chat_only"?: boolean;
    /**  (Type: string, Required: No) */
    "wordban_list"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Start building a broadcast clip
   * 
   * Version: 1
   * HTTP Method: POST
   */
  StartBuildClip(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "broadcast_session_id"?: string | number;
    /**  (Type: int32, Required: No) */
    "first_segment"?: number;
    /**  (Type: int32, Required: No) */
    "num_segments"?: number;
    /**  (Type: string, Required: No) */
    "clip_description"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Update chat message flair in the specified chat room
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateChatMessageFlair(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "chat_id"?: string | number;
    /**  (Type: string, Required: No) */
    "flair"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICSGOPlayers_730 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetNextMatchSharingCode(params?: {
    /** The SteamID of the user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Authentication obtained from the SteamID (Type: string, Required: Yes) */
    "steamidkey": string;
    /** Previously known match sharing code obtained from the SteamID (Type: string, Required: Yes) */
    "knowncode": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerProfile(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerProfileCoin(params?: {
    /** The steam ID (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The coin (Type: string, Required: Yes) */
    "coin": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICSGOServers_730 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGameMapsPlaytime(params?: {
    /** What recent interval is requested, possible values: day, week, month (Type: string, Required: Yes) */
    "interval": string;
    /** What game mode is requested, possible values: competitive, casual (Type: string, Required: Yes) */
    "gamemode": string;
    /** What maps are requested, possible values: operation (Type: string, Required: Yes) */
    "mapgroup": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGameServersStatus(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeaderboardEntries(params?: {
    /** Name of the leaderboard, must start with official_leaderboard_premier_<season>, optionally followed by _<country>, e.g. official_leaderboard_premier_season3 or official_leaderboard_premier_season2_europe (Type: string, Required: Yes) */
    "lbname": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMonthlyPlayerCount(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICSGOStreamSystem_730 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMatchScoreboard(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ListOfUsersSpectating(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICSGOTournaments_730 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ClaimBadgeReward(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTournamentFantasyLineup(params?: {
    /** The event ID (Type: uint32, Required: Yes) */
    "event": number;
    /** The SteamID of the user inventory (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Authentication obtained from the SteamID (Type: string, Required: Yes) */
    "steamidkey": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTournamentItems(params?: {
    /** The event ID (Type: uint32, Required: Yes) */
    "event": number;
    /** The SteamID of the user inventory (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Authentication obtained from the SteamID (Type: string, Required: Yes) */
    "steamidkey": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTournamentLayout(params?: {
    /** The event ID (Type: uint32, Required: Yes) */
    "event": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTournamentPredictions(params?: {
    /** The event ID (Type: uint32, Required: Yes) */
    "event": number;
    /** The SteamID of the user inventory (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Authentication obtained from the SteamID (Type: string, Required: Yes) */
    "steamidkey": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UploadTournamentFantasyLineup(params?: {
    /** The event ID (Type: uint32, Required: Yes) */
    "event": number;
    /** The SteamID of the user inventory (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Authentication obtained from the SteamID (Type: string, Required: Yes) */
    "steamidkey": string;
    /** Event section id (Type: uint32, Required: Yes) */
    "sectionid": number;
    /** PickID to select for the slot (Type: uint32, Required: Yes) */
    "pickid0": number;
    /** ItemID to lock in for the pick (Type: uint64, Required: Yes) */
    "itemid0": string | number;
    /** PickID to select for the slot (Type: uint32, Required: Yes) */
    "pickid1": number;
    /** ItemID to lock in for the pick (Type: uint64, Required: Yes) */
    "itemid1": string | number;
    /** PickID to select for the slot (Type: uint32, Required: Yes) */
    "pickid2": number;
    /** ItemID to lock in for the pick (Type: uint64, Required: Yes) */
    "itemid2": string | number;
    /** PickID to select for the slot (Type: uint32, Required: Yes) */
    "pickid3": number;
    /** ItemID to lock in for the pick (Type: uint64, Required: Yes) */
    "itemid3": string | number;
    /** PickID to select for the slot (Type: uint32, Required: Yes) */
    "pickid4": number;
    /** ItemID to lock in for the pick (Type: uint64, Required: Yes) */
    "itemid4": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UploadTournamentPredictions(params?: {
    /** The event ID (Type: uint32, Required: Yes) */
    "event": number;
    /** The SteamID of the user inventory (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Authentication obtained from the SteamID (Type: string, Required: Yes) */
    "steamidkey": string;
    /** Event section id (Type: uint32, Required: Yes) */
    "sectionid": number;
    /** Event group id (Type: uint32, Required: Yes) */
    "groupid": number;
    /** Index in group (Type: uint32, Required: Yes) */
    "index": number;
    /** Pick ID to select (Type: uint32, Required: Yes) */
    "pickid": number;
    /** ItemID to lock in for the pick (Type: uint64, Required: Yes) */
    "itemid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IChatRoomService {
  /**
   * App invite player(s) to a chat room that it controls, or just extend invite(s)
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  AppAddUsersToGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "chat_group_id": string | number;
    /**  (Type: uint64, Required: Yes) */
    "steamids": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: bool, Required: Yes) */
    "suppress_log_messages": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * App invite a player to a chat room that it controls, or just extend an invite
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  AppPostSystemMessageToGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "chat_group_id": string | number;
    /**  (Type: string, Required: Yes) */
    "message": string;
    /**  (Type: string, Required: Yes) */
    "loc_token": string;
    /**  (Type: {message}, Required: Yes) */
    "params": any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * App remove player(s) from a chat room that it controls
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  AppRemoveUsersFromGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "chat_group_id": string | number;
    /**  (Type: uint64, Required: Yes) */
    "steamid_targets": string | number;
    /**  (Type: int32, Required: Yes) */
    "kick_expiration": number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid_kick_actor": string | number;
    /**  (Type: bool, Required: Yes) */
    "suppress_log_messages": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * App creating a chat room and inviting players to it
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  CreateAppChatRoomGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "steamid_owner": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: string, Required: Yes) */
    "name": string;
    /**  (Type: uint32, Required: Yes) */
    "room_type": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ResolveReport(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** enum (Type: EContentReportResolution, Required: No) */
    "resolution"?: any;
    /** enum (Type: EContentReportReason, Required: No) */
    "reason"?: any;
    /** enum (Type: EContentReportSubjectType, Required: No) */
    "subject_type"?: any;
    /**  (Type: uint64, Required: No) */
    "chat_group_id"?: string | number;
    /**  (Type: uint32, Required: No) */
    "kick_expiration_time"?: number;
    /**  (Type: bool, Required: No) */
    "skip_lock"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Update the display and rules properties for an app-created chat room
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SetAppChatRoomConfig(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "chat_group_id": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: string, Required: Yes) */
    "name": string;
    /**  (Type: uint64, Required: Yes) */
    "avatar_ugc_id": string | number;
    /**  (Type: bool, Required: Yes) */
    "allow_user_invites": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICheatReportingService {
  /**
   * Tell the VAC servers that a secure multiplayer session has ended.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  EndSecureMultiplayerSession(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid of the user. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The appid the user is playing. (Type: uint32, Required: Yes) */
    "appid": number;
    /** session id (Type: uint64, Required: Yes) */
    "session_id": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a list of cheating reports submitted for this app
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetCheatingReports(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The appid. (Type: uint32, Required: Yes) */
    "appid": number;
    /** The beginning of the time range . (Type: uint32, Required: Yes) */
    "timeend": number;
    /** The end of the time range. (Type: uint32, Required: Yes) */
    "timebegin": number;
    /** Minimum reportID to include (Type: uint64, Required: Yes) */
    "reportidmin": string | number;
    /** Include reports. (Type: bool, Required: No) */
    "includereports"?: boolean;
    /** Include ban requests. (Type: bool, Required: No) */
    "includebans"?: boolean;
    /** Query just for this steamid. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Remove a ban on a player
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RemovePlayerGameBan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid of the user who is reported as cheating. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The appid. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Reports cheat data. Only use on test account that is running the game but not in a multiplayer session.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ReportCheatData(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid of the user running and reporting the cheat. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The appid. (Type: uint32, Required: Yes) */
    "appid": number;
    /** path and file name of the cheat executable. (Type: string, Required: Yes) */
    "pathandfilename": string;
    /** web url where the cheat was found and downloaded. (Type: string, Required: Yes) */
    "webcheaturl": string;
    /** local system time now. (Type: uint64, Required: Yes) */
    "time_now": string | number;
    /** local system time when cheat process started. ( 0 if not yet run ) (Type: uint64, Required: Yes) */
    "time_started": string | number;
    /** local system time when cheat process stopped. ( 0 if still running ) (Type: uint64, Required: Yes) */
    "time_stopped": string | number;
    /** descriptive name for the cheat. (Type: string, Required: Yes) */
    "cheatname": string;
    /** process ID of the running game. (Type: uint32, Required: Yes) */
    "game_process_id": number;
    /** process ID of the cheat process that ran (Type: uint32, Required: Yes) */
    "cheat_process_id": number;
    /** cheat param 1 (Type: uint64, Required: Yes) */
    "cheat_param_1": string | number;
    /** cheat param 2 (Type: uint64, Required: Yes) */
    "cheat_param_2": string | number;
    /** data collection in json format (Type: string, Required: Yes) */
    "cheat_data_dump": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Reports a player cheating
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ReportPlayerCheating(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid of the user who is reported as cheating. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The appid. (Type: uint32, Required: Yes) */
    "appid": number;
    /** steamid of the user or game server who is reporting the cheating. (Type: uint64, Required: No) */
    "steamidreporter"?: string | number;
    /** App specific data about the cheating. (Type: uint64, Required: No) */
    "appdata"?: string | number;
    /** extra information about the source of the cheating - was it a heuristic. (Type: bool, Required: No) */
    "heuristic"?: boolean;
    /** extra information about the source of the cheating - was it a detection. (Type: bool, Required: No) */
    "detection"?: boolean;
    /** extra information about the source of the cheating - was it a player report. (Type: bool, Required: No) */
    "playerreport"?: boolean;
    /** dont return report id (Type: bool, Required: No) */
    "noreportid"?: boolean;
    /** extra information about state of game - was it a specific type of game play (0 = generic) (Type: uint32, Required: No) */
    "gamemode"?: number;
    /** extra information indicating how far back the game thinks is interesting for this user (Type: uint32, Required: No) */
    "suspicionstarttime"?: number;
    /** level of severity of bad action being reported (Type: uint32, Required: No) */
    "severity"?: number;
    /** matchid to identify the game instance (Type: uint64, Required: No) */
    "matchid"?: string | number;
    /** app specific data about the type of cheating (Type: uint64, Required: No) */
    "cheating_type"?: string | number;
    /** App specific data about the cheating. (Type: uint64, Required: No) */
    "appdata2"?: string | number;
    /** Time when the cheating occured (Type: uint32, Required: No) */
    "infraction_time"?: number;
    /** Raw report data (Type: string, Required: No) */
    "raw_report"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Requests a ban on a player
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RequestPlayerGameBan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid of the user who is reported as cheating. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The appid. (Type: uint32, Required: Yes) */
    "appid": number;
    /** The reportid originally used to report cheating. (Type: uint64, Required: Yes) */
    "reportid": string | number;
    /** Text describing cheating infraction. (Type: string, Required: Yes) */
    "cheatdescription": string;
    /** Ban duration requested in seconds. (Type: uint32, Required: Yes) */
    "duration": number;
    /** Delay the ban according to default ban delay rules. (Type: bool, Required: Yes) */
    "delayban": boolean;
    /** Additional information about the ban request. (Type: uint32, Required: Yes) */
    "flags": number;
    /** The ban will be recorded but not be visible or deny access to secure servers. (Type: bool, Required: Yes) */
    "invisible_ban": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Checks a user's VAC session status. If verification fails, then do not let the user matchmake into a secure game.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RequestVacStatusForUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid of the user. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The appid the user is playing. (Type: uint32, Required: Yes) */
    "appid": number;
    /** session id (Type: uint64, Required: Yes) */
    "session_id": string | number;
    /** session flags (Type: uint32, Required: Yes) */
    "session_flags": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Tell the VAC servers that a secure multiplayer session has started
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  StartSecureMultiplayerSession(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid of the user. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The appid the user is playing. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICheckoutService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddFreeLicense(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreItemID, Required: No) */
    "item_id"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFriendOwnershipForGifting(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreItemID[], Required: No) */
    "item_ids"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ValidateCart(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: int64, Required: No) */
    "gidshoppingcart"?: string | number;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /**  (Type: CartGiftInfo, Required: No) */
    "gift_info"?: any;
    /**  (Type: fixed64, Required: No) */
    "gidreplayoftransid"?: string | number;
    /**  (Type: bool, Required: No) */
    "for_init_purchase"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICitadelAdmin_1422450 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReplayURL(params?: {
    /** The ID of the match to load (Type: uint64, Required: Yes) */
    "MatchID": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICitadelAdmin_3488080 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReplayURL(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICitadelAdmin_3781850 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReplayURL(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IClanFAQSService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CheckFAQPermissions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan. (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  Create(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan the FAQ is for. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Human-readable name, for editor use only. (Type: string, Required: No) */
    "internal_name"?: string;
    /** extra metadata, like legacy KB data. Optional. (Type: string, Required: No) */
    "json_data"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  Delete(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan the FAQ is for. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** The unique FAQ identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  FetchLocalizationFromCrowdIn(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /**  (Type: uint32, Required: No) */
    "language"?: number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAllDrafts(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan the FAQ is for. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** The unique FAQ identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAllFAQsForClan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAllLatestVersionPublishedFAQS(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** The unique FAQ identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetCrowdInMetadata(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFAQ(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The unique FAQ identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** ELanguage to fetch. Falls back to English or SC, based on realm. (Type: uint32, Required: No) */
    "language"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetFAQVersion(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan the FAQ is for. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** The unique FAQ identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** ELanguage to fetch. Falls back to English or SC, based on realm. (Type: uint32, Required: No) */
    "language"?: number;
    /** Version number for this FAQ, counting up, or zero (0) for the current draft. (Type: uint64, Required: No) */
    "version"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PreviewDraft(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan the FAQ is for. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** The unique FAQ identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** ELanguage to fetch. (Type: uint32, Required: No) */
    "language"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PublishDraft(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan the FAQ is for. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** The unique FAQ identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** ELanguages to publish (Type: ELanguage[], Required: No) */
    "language"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SearchFAQs(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The text that we will use to search name/content in solr (Type: string, Required: No) */
    "search_text"?: string;
    /** List of Elanguages to return resultsin, in order of priority (Type: int32[], Required: No) */
    "elanguages"?: number[];
    /** Number of results to return for this page (Type: int32, Required: No) */
    "count"?: number;
    /** Optional cursor if you are paging through results (Type: string, Required: No) */
    "cursor"?: string;
    /** List of clanids to limit search to (Type: uint32[], Required: No) */
    "filter_clanids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetVisibility(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan the FAQ is for. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** The unique FAQ identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** true to show, false to hide. (Type: bool, Required: No) */
    "visible_in_global_realm"?: boolean;
    /** true to show, false to hide. (Type: bool, Required: No) */
    "visible_in_china_realm"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateDraft(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan the FAQ is for. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** The unique FAQ identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** ELanguage (Type: ELanguage, Required: No) */
    "language"?: any;
    /** Presumably BBCode (Type: string, Required: No) */
    "content"?: string;
    /** Human-readable name, for page title. (Type: string, Required: No) */
    "title"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateInternalName(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan the FAQ is for. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** The new FAQ's unique identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** Human-readable name, for editor use only. (Type: string, Required: No) */
    "internal_name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateJsonData(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan the FAQ is for. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** The new FAQ's unique identifier. (Type: uint64, Required: No) */
    "faq_id"?: string | number;
    /** extra metadata, like legacy KB data. (Type: string, Required: No) */
    "json_data"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IClanService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAdjacentPartnerEvents(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDraftAndRecentPartnerEventSnippet(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "rtime_oldest_date"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPartnerEventsByBuildIDRange(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Optional cursor if you are paging through results (Type: string, Required: No) */
    "cursor"?: string;
    /** How many results to return (Type: uint32, Required: No) */
    "count"?: number;
    /**  (Type: CClan_GetPartnerEventsByBuildIDRange_Request_PatchNoteRange[], Required: No) */
    "requests"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IClientCommService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  EnableOrDisableDownloads(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Uses first desktop session if not specified (Type: uint64, Required: No) */
    "client_instanceid"?: string | number;
    /** True to enable downloads, false to disable (Type: bool, Required: No) */
    "enable"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAllClientLogonInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientAppList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** A combination of fields : 'all|media|tools|games' (Type: string, Required: No) */
    "fields"?: string;
    /** A combination of state filters : 'none|changing|installed' (Type: string, Required: No) */
    "filters"?: string;
    /** Uses first desktop session if not specified (Type: uint64, Required: No) */
    "client_instanceid"?: string | number;
    /** If true, response will also include ClientData message (Type: bool, Required: No) */
    "include_client_info"?: boolean;
    /** Language for app names (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: uint32[], Required: No) */
    "filter_appids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Uses first desktop session if not specified (Type: uint64, Required: No) */
    "client_instanceid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientLogonInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Uses first desktop session if not specified (Type: uint64, Required: No) */
    "client_instanceid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  InstallClientApp(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** appID of product to install (Type: uint32, Required: No) */
    "appid"?: number;
    /** Uses first desktop session if not specified (Type: uint64, Required: No) */
    "client_instanceid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  LaunchClientApp(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "client_instanceid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "query_params"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetClientAppUpdateState(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** appID of product to uninstall (Type: uint32, Required: No) */
    "appid"?: number;
    /** 1 to resume downloading, 0 to pause downloading (Type: uint32, Required: No) */
    "action"?: number;
    /** Uses first desktop session if not specified (Type: uint64, Required: No) */
    "client_instanceid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UninstallClientApp(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** appID of product to install (Type: uint32, Required: No) */
    "appid"?: number;
    /** Uses first desktop session if not specified (Type: uint64, Required: No) */
    "client_instanceid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IClientMetricsService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ReportClientError(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "product"?: string;
    /**  (Type: string, Required: No) */
    "version"?: string;
    /**  (Type: CClientMetrics_ReportClientError_Notification.Error[], Required: No) */
    "errors"?: any[];
    /**  (Type: string[], Required: No) */
    "tags"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ReportReactUsage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "product"?: string;
    /**  (Type: string, Required: No) */
    "version"?: string;
    /**  (Type: CClientMetrics_ReportReactUsage_Notification.RouteData[], Required: No) */
    "routes"?: any[];
    /**  (Type: CClientMetrics_ReportReactUsage_Notification.ComponentData[], Required: No) */
    "components"?: any[];
    /**  (Type: CClientMetrics_ReportReactUsage_Notification.ActionData[], Required: No) */
    "actions"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IClientStats_1046930 {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ReportEvent(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICloudService {
  /**
   * Indicate a batch of files that will be uploaded / deleted for an app.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  BeginAppUploadBatch(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** App ID for this batch is for. (Type: uint32, Required: No) */
    "appid"?: number;
    /** Client machine name (may be user's alias). (Type: string, Required: No) */
    "machine_name"?: string;
    /** Filenames of files to upload in this batch (Type: string[], Required: No) */
    "files_to_upload"?: string[];
    /** Filenames of files to delete in this batch (Type: string[], Required: No) */
    "files_to_delete"?: string[];
    /** Client ID number (Type: uint64, Required: No) */
    "client_id"?: string | number;
    /** Current local build of the app which made these changes (Type: uint64, Required: No) */
    "app_build_id"?: string | number;
    /** OAuth access token for the user (Type: string, Required: Yes) */
    "access_token"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Begins the process of uploading a file to Steam external storage services. File should be uploaded via HTTP PUT to the returned URL, after which the upload must be finalized by a call to CommitHTTPUpload.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  BeginHTTPUpload(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** App ID for which the file is being uploaded. (Type: uint32, Required: No) */
    "appid"?: number;
    /** Original file size in bytes. (Type: uint32, Required: No) */
    "file_size"?: number;
    /** Name of the file to store in the cloud. (Type: string, Required: No) */
    "filename"?: string;
    /** Hex string (40 digits) representing the SHA1 digest of the file. (Type: string, Required: No) */
    "file_sha"?: string;
    /** True if the file should be marked public on the UFS, false otherwise. (Type: bool, Required: No) */
    "is_public"?: boolean;
    /** Array of string specifying which platforms to sync; value values: all, Windows, MacOS, linux, Switch, iPhoneOS, Android. (Type: string[], Required: No) */
    "platforms_to_sync"?: string[];
    /** Names for headers you'll want to set on your upload request. May be left blank. (Type: string[], Required: No) */
    "request_headers_names"?: string[];
    /** Values for headers you'll want to set on your upload request. The number of names must equal the number of values. (Type: string[], Required: No) */
    "request_headers_values"?: string[];
    /** ID of this batch returned by prior BeginAppUploadBatch call. (Type: uint64, Required: No) */
    "upload_batch_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Begins the process of uploading a file to Steam external storage services. File should be uploaded via HTTP PUT to the returned URL, after which the upload must be finalized by a call to CommitHTTPUpload.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  BeginUGCUpload(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** App ID this UGC belongs to. (Type: uint32, Required: No) */
    "appid"?: number;
    /** File size in bytes. (Type: uint32, Required: No) */
    "file_size"?: number;
    /** Name of the file. (Type: string, Required: No) */
    "filename"?: string;
    /** Hex string (40 digits) representing the SHA1 digest of the file. (Type: string, Required: No) */
    "file_sha"?: string;
    /** MIME content type of the file (Type: string, Required: No) */
    "content_type"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Commits a file upload initiated by BeginHTTPUpload and transferred via HTTP PUT.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CommitHTTPUpload(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** True if the HTTP PUT to the upload URL succeeded (URL provided in response to Cloud.BeginHTTPUpload), false if a failure occurred. (Type: bool, Required: No) */
    "transfer_succeeded"?: boolean;
    /** App ID for which the file is being uploaded. Must match the app ID provided to Cloud.BeginHTTPUpload. (Type: uint32, Required: No) */
    "appid"?: number;
    /** Hex string (40 digits) representing the SHA1 digest of the file. Must match the SHA1 digest provided to Cloud.BeginHTTPUpload. (Type: string, Required: No) */
    "file_sha"?: string;
    /** Filename as specified in the Cloud.BeginHTTPUpload request. (Type: string, Required: No) */
    "filename"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Commits a file upload initiated by BeginUGCUpload and transferred via HTTP PUT.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CommitUGCUpload(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** True if the HTTP PUT to the upload URL succeeded (URL provided in response to Cloud.BeginUGCUpload), false if a failure occurred. (Type: bool, Required: No) */
    "transfer_succeeded"?: boolean;
    /** App ID for which the file is being uploaded. Must match the app ID provided to Cloud.BeginUGCUpload. (Type: uint32, Required: No) */
    "appid"?: number;
    /** UGC ID of the uploaded file. (Type: fixed64, Required: No) */
    "ugcid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Indicate that the batch is complete or being stopped for some other reason.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CompleteAppUploadBatch(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** App ID for this batch is for. (Type: uint32, Required: No) */
    "appid"?: number;
    /** ID of this batch. (Type: uint64, Required: No) */
    "batch_id"?: string | number;
    /** result of this batch. (Type: uint32, Required: No) */
    "batch_eresult"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Indicate that the batch is complete or being stopped for some other reason.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CompleteAppUploadBatchBlocking(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** App ID for this batch is for. (Type: uint32, Required: No) */
    "appid"?: number;
    /** ID of this batch. (Type: uint64, Required: No) */
    "batch_id"?: string | number;
    /** result of this batch. (Type: uint32, Required: No) */
    "batch_eresult"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Deletes a file from the user's cloud.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  Delete(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "filename"?: string;
    /** App ID the file belongs to. (Type: uint32, Required: No) */
    "appid"?: number;
    /** ID of this batch returned by prior BeginAppUploadBatch call. (Type: uint64, Required: No) */
    "upload_batch_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Enumerates Cloud files for a user of a given app ID. Returns up to 500 files at a time.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  EnumerateUserFiles(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** App ID to enumerate the files of. (Type: uint32, Required: No) */
    "appid"?: number;
    /** Get extended details back on the files found. Defaults to only returned the app Id and UGC Id of the files found. (Type: bool, Required: No) */
    "extended_details"?: boolean;
    /** Maximum number of results to return on this call. Defaults to a maximum of 500 files returned. (Type: uint32, Required: No) */
    "count"?: number;
    /** Starting index to begin enumeration at. Defaults to the beginning of the list. (Type: uint32, Required: No) */
    "start_index"?: number;
    /** OAuth access token for the user (Type: string, Required: Yes) */
    "access_token"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns details on a Cloud file.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFileDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** ID of the Cloud file to get details for. (Type: uint64, Required: No) */
    "ugcid"?: string | number;
    /** App ID the file belongs to. (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICommentModerationService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateCommentReportState(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: bool, Required: No) */
    "resolve"?: boolean;
    /**  (Type: uint64, Required: No) */
    "reportid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "report_action"?: number;
    /**  (Type: fixed64, Required: No) */
    "gidcomment"?: string | number;
    /**  (Type: string, Required: No) */
    "commentthreadtype"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidfeature2"?: string | number;
    /**  (Type: CommentClassification, Required: No) */
    "classification"?: any;
    /**  (Type: uint32, Required: No) */
    "reason"?: number;
    /**  (Type: uint64, Required: No) */
    "comment_thread_id"?: string | number;
    /**  (Type: CCommentModeration_UpdateCommentReportState_Request_Sanction[], Required: No) */
    "sanctions"?: any[];
    /**  (Type: string, Required: No) */
    "note"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICommunityService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  FetchTranslationFromCrowdIn(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "itemid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "language"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetApps(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: int32[], Required: No) */
    "appids"?: number[];
    /**  (Type: ELanguage, Required: No) */
    "language"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAvatarHistory(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: bool, Required: No) */
    "filter_user_uploaded_only"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBestEventsForUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Optional: if true Steam blog events will be included (Type: bool, Required: No) */
    "include_steam_blog"?: boolean;
    /** Optional: if set Steam will only return events for apps the user has played within the set number of trailing days (Type: uint32, Required: No) */
    "filter_to_played_within_days"?: number;
    /** Optional: if true means only return data for events that are major/minor game updates, not other game news/events (Type: bool, Required: No) */
    "include_only_game_updates"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClanAnnouncements(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClanCrowdInMetadata(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClanEventCrowdInMetadata(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "itemid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClanMetadata(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetComment(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "comment_thread_type"?: number;
    /**  (Type: fixed64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "gidfeature2"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "gidcomment"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "comment_thread_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetCommentThread(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: ECommentThreadType, Required: No) */
    "comment_thread_type"?: any;
    /**  (Type: fixed64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "gidfeature2"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "commentthreadid"?: string | number;
    /**  (Type: int32, Required: No) */
    "start"?: number;
    /**  (Type: int32, Required: No) */
    "count"?: number;
    /**  (Type: int32, Required: No) */
    "upvoters"?: number;
    /**  (Type: bool, Required: No) */
    "include_deleted"?: boolean;
    /**  (Type: fixed64, Required: No) */
    "gidcomment"?: string | number;
    /**  (Type: uint32, Required: No) */
    "time_oldest"?: number;
    /**  (Type: bool, Required: No) */
    "oldest_first"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSingleClanAnnouncement(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserPartnerEventNews(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Maximum number of results you want back (Type: uint32, Required: No) */
    "count"?: number;
    /** On a continuing request, where to continue requesting events from. (Type: uint32, Required: No) */
    "offset"?: number;
    /** Required: Unix time for when to beginning of today for search - users timezone sensitive (Type: uint32, Required: No) */
    "rtime32_start_time"?: number;
    /** Required: Unix time for when to end of today the search - users timezone sensitive (Type: uint32, Required: No) */
    "rtime32_end_time"?: number;
    /** Preferred languages (in order of preference) (Type: uint32[], Required: No) */
    "language_preference"?: number[];
    /** Optional: Limit the results to only these types of events (Type: int32[], Required: No) */
    "filter_event_type"?: number[];
    /** If true, then filter to only the appids in the below list. Otherwise, combination of server determined appids and the below requested appids (Type: bool, Required: No) */
    "filter_to_appid"?: boolean;
    /** Optional: Return up to this number of events after end-time (Type: uint32, Required: No) */
    "count_after"?: number;
    /** Optional: Return up to this number of events before start-time (Type: uint32, Required: No) */
    "count_before"?: number;
    /** Optional: include these appids on the event list (Type: CAppPriority[], Required: No) */
    "app_list"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  HideAndReportComment(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidfeature2"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidcomment"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "commentthreadtype"?: string;
    /**  (Type: bool, Required: No) */
    "hide"?: boolean;
    /** enum (Type: int32, Required: No) */
    "report_reason"?: number;
    /**  (Type: string, Required: No) */
    "report_text"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PostCommentToThread(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: ECommentThreadType, Required: No) */
    "comment_thread_type"?: any;
    /**  (Type: fixed64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "gidfeature2"?: string | number;
    /**  (Type: string, Required: No) */
    "text"?: string;
    /**  (Type: fixed64, Required: No) */
    "gidparentcomment"?: string | number;
    /**  (Type: bool, Required: No) */
    "suppress_notifications"?: boolean;
    /**  (Type: bool, Required: No) */
    "is_report"?: boolean;
    /**  (Type: bool, Required: No) */
    "start_hidden"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SanctionComment(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "comment_thread_id"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "gidcomment"?: string | number;
    /** enum (Type: int32, Required: No) */
    "reason"?: number;
    /**  (Type: string, Required: No) */
    "note"?: string;
    /**  (Type: CCommunity_SanctionComment_Request_Sanction[], Required: No) */
    "sanctions"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  VerifyClanMembership(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint64[], Required: No) */
    "steamids_verifymembership"?: string | number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IContentFilteringService {
  /**
   * Filter a list of strings in the requested language with rules that match the client.
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  FilterStrings(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** AppID that is asking to having filtering performed. (Type: int32, Required: Yes) */
    "appid": number;
    /** In which language should filtering be performed. If empty, no profanity filtering will be performed. (Type: string, Required: Yes) */
    "language": string;
    /** If set to an ISO 3166-1 Alpha-2 country code that requires legal filtering, that legal filtering will be performed. (Type: string, Required: Yes) */
    "legal_filtering_country": string;
    /** The list of strings to be filtered. (Type: string, Required: Yes) */
    "raw_strings": string;
    /** True if the strings are names instead of chat text (Type: bool, Required: Yes) */
    "is_name": boolean;
    /** The SteamID of the person viewing the text (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IContentModerationService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CancelContentReport(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "report_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ClaimBatch(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /** enum (Type: int32, Required: No) */
    "moderator_level"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ClaimBatchForModeration(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32[], Required: No) */
    "accepted_subject_types"?: number[];
    /**  (Type: uint32, Required: No) */
    "support_company"?: number;
    /**  (Type: int32[], Required: No) */
    "accepted_languages"?: number[];
    /** enum (Type: int32, Required: No) */
    "moderator_level"?: number;
    /**  (Type: bool, Required: No) */
    "disputed"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ClaimSubject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateContentReport(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "report_reason"?: number;
    /**  (Type: string, Required: No) */
    "report_text"?: string;
    /**  (Type: uint64, Required: No) */
    "owner_steamid"?: string | number;
    /**  (Type: int32, Required: No) */
    "language"?: number;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /**  (Type: AdditionalSubjectData, Required: No) */
    "additional_subject_data"?: any;
    /**  (Type: bool, Required: No) */
    "detected_by_automation"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DisputeModerationForReport(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "report_id"?: string | number;
    /**  (Type: string, Required: No) */
    "details"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DisputeModerationForSubject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /**  (Type: string, Required: No) */
    "details"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  EscalateSubject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** enum (Type: int32, Required: No) */
    "required_level"?: number;
    /** enum (Type: int32, Required: No) */
    "reason"?: number;
    /**  (Type: string, Required: No) */
    "note"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAuditLog(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClaimed(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClaimedSubjects(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetContentReportSubject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetContentReportSubjectGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDailyModerationStatistics(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "rtime_start_date"?: number;
    /**  (Type: uint32, Required: No) */
    "rtime_end_date"?: number;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetModeratorActivity(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "rt_start"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetModeratorPreferences(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetOldestUnresolvedSubjects(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint32, Required: No) */
    "count"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetOneReportSubmittedByUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReportedSubjectsByOwner(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReporterCooldown(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReporterStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReportsSubmittedByUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "start"?: number;
    /**  (Type: uint32, Required: No) */
    "count"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetSubjectOverview(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ReleaseClaimed(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ReleaseSubject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ReleaseSubjects(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: ContentReportSubjectKey[], Required: No) */
    "subjects_to_release"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ResolveDisputedSubject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** enum (Type: int32, Required: No) */
    "updated_resolution"?: number;
    /** enum (Type: int32, Required: No) */
    "updated_reason"?: number;
    /**  (Type: ContentReportSubjectSanction[], Required: No) */
    "updated_sanctions"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ResolveSubject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** enum (Type: int32, Required: No) */
    "resolution"?: number;
    /** enum (Type: int32, Required: No) */
    "reason"?: number;
    /**  (Type: string, Required: No) */
    "note"?: string;
    /** enum (Type: int32, Required: No) */
    "resolved_by_automation"?: number;
    /**  (Type: bool, Required: No) */
    "skip_lock"?: boolean;
    /**  (Type: ContentReportSubjectSanction[], Required: No) */
    "sanctions_applied"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ResolveSubjectGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /** enum (Type: int32, Required: No) */
    "resolution"?: number;
    /** enum (Type: int32, Required: No) */
    "reason"?: number;
    /**  (Type: string, Required: No) */
    "note"?: string;
    /** enum (Type: int32, Required: No) */
    "resolved_by_automation"?: number;
    /**  (Type: ContentReportSubjectSanction[], Required: No) */
    "sanctions_applied"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetModeratorPreferences(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "preferred_level"?: number;
    /**  (Type: CContentModeration_SetModeratorPreferences_Request_SubjectTypeList, Required: No) */
    "enabled_subject_types"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SustainModeration(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateReporterCooldown(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "rtime_cooldown_ends"?: number;
    /**  (Type: bool, Required: No) */
    "acquit_unresolved_reports"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateSubject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** enum (Type: int32, Required: No) */
    "csam_status"?: number;
    /** enum (Type: int32, Required: No) */
    "terrorism_status"?: number;
    /** enum (Type: int32, Required: No) */
    "credible_threat_of_violence_status"?: number;
    /**  (Type: AdditionalSubjectData, Required: No) */
    "additional_subject_data"?: any;
    /**  (Type: string, Required: No) */
    "owner_dispute_details"?: string;
    /**  (Type: uint64, Required: No) */
    "new_subject_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateSubjectGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: AdditionalSubjectData, Required: No) */
    "additional_subject_data"?: any;
    /**  (Type: uint64, Required: No) */
    "new_subject_group_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  WriteToAuditLog(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "subject_type"?: number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** enum (Type: int32, Required: No) */
    "action"?: number;
    /**  (Type: bool, Required: No) */
    "automated_action"?: boolean;
    /**  (Type: string, Required: No) */
    "additional_json_data"?: string;
    /**  (Type: fixed64, Required: No) */
    "actor_steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IContentServerConfigService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AllocateSteamCacheNode(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "provider"?: string;
    /**  (Type: string, Required: No) */
    "host_name"?: string;
    /**  (Type: string, Required: No) */
    "name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamCacheConfig(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "cache_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamCacheConfigHistory(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "cache_id"?: number;
    /**  (Type: uint32, Required: No) */
    "max_results"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamCacheNames(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the operational parameters for a SteamCache node (information the node uses to operate).
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamCacheNodeParams(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Unique ID number (Type: uint32, Required: Yes) */
    "cache_id": number;
    /** Valid current cache API key (Type: string, Required: Yes) */
    "cache_key": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Update the client filters for a SteamCache node
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetSteamCacheClientFilters(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Unique ID number (Type: uint32, Required: Yes) */
    "cache_id": number;
    /** Valid current cache API key (Type: string, Required: Yes) */
    "cache_key": string;
    /** Notes (Type: string, Required: Yes) */
    "change_notes": string;
    /** comma-separated list of allowed IP address blocks in CIDR format - blank to clear unfilter (Type: string, Required: Yes) */
    "allowed_ip_blocks": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Update the performance/load stats for a SteamCache node
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetSteamCachePerformanceStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Unique ID number (Type: uint32, Required: Yes) */
    "cache_id": number;
    /** Valid current cache API key (Type: string, Required: Yes) */
    "cache_key": string;
    /** Outgoing network traffic in Mbps (Type: uint32, Required: Yes) */
    "mbps_sent": number;
    /** Incoming network traffic in Mbps (Type: uint32, Required: Yes) */
    "mbps_recv": number;
    /** Percent CPU load (Type: uint32, Required: Yes) */
    "cpu_percent": number;
    /** Percent cache hits (Type: uint32, Required: Yes) */
    "cache_hit_percent": number;
    /** Number of unique connected IP addresses (Type: uint32, Required: Yes) */
    "num_connected_ips": number;
    /** (deprecated) What is the percent utilization of the busiest datacenter egress link? (Type: uint32, Required: Yes) */
    "upstream_egress_utilization": number;
    /** What is the percent utilization of the busiest peering link? (Type: uint32, Required: Yes) */
    "upstream_peering_utilization": number;
    /** What is the percent utilization of the busiest transit link? (Type: uint32, Required: Yes) */
    "upstream_transit_utilization": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateSteamCacheConfig(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "cache_id"?: number;
    /**  (Type: string, Required: No) */
    "change_notes"?: string;
    /**  (Type: CContentServerConfig_SteamCacheConfig, Required: No) */
    "config"?: any;
    /**  (Type: bool, Required: No) */
    "omit_history_entry"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IContentServerDirectoryService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCDNForVideo(params?: {
    /** ECDNPropertyType (Type: int32, Required: Yes) */
    "property_type": number;
    /** client IP address (Type: string, Required: Yes) */
    "client_ip": string;
    /** client region (Type: string, Required: Yes) */
    "client_region": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientUpdateHosts(params?: {
    /**  (Type: string, Required: Yes) */
    "cached_signature": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDepotPatchInfo(params?: {
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint32, Required: Yes) */
    "depotid": number;
    /**  (Type: uint64, Required: Yes) */
    "source_manifestid": string | number;
    /**  (Type: uint64, Required: Yes) */
    "target_manifestid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServersForSteamPipe(params?: {
    /** client Cell ID (Type: uint32, Required: Yes) */
    "cell_id": number;
    /** max servers in response list (Type: uint32, Required: No) */
    "max_servers"?: number;
    /** client IP address (Type: string, Required: No) */
    "ip_override"?: string;
    /** launcher type (Type: int32, Required: No) */
    "launcher_type"?: number;
    /** client public ipv6 address if it knows it (Type: string, Required: No) */
    "ipv6_public"?: string;
    /** what sources is the client currently using (Type: {message}, Required: Yes) */
    "current_connections": any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  PickSingleContentServer(params?: {
    /** ECDNPropertyType (Type: int32, Required: Yes) */
    "property_type": number;
    /** client Cell ID (Type: uint32, Required: Yes) */
    "cell_id": number;
    /** client IP address (Type: string, Required: Yes) */
    "client_ip": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICrashReportService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  FinishCrashUpload(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  StartCrashUpload(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: bool, Required: No) */
    "have_dump_file"?: boolean;
    /**  (Type: uint32, Required: No) */
    "dump_file_size"?: number;
    /**  (Type: string, Required: No) */
    "product"?: string;
    /**  (Type: string, Required: No) */
    "build"?: string;
    /**  (Type: string, Required: No) */
    "version"?: string;
    /**  (Type: string, Required: No) */
    "platform"?: string;
    /**  (Type: uint32, Required: No) */
    "crash_time"?: number;
    /**  (Type: string, Required: No) */
    "stack"?: string;
    /**  (Type: string, Required: No) */
    "note"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ICredentialsService {
  /**
   * SteamGuardPhishingReport
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SteamGuardPhishingReport(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "param_string"?: string;
    /**  (Type: string, Required: No) */
    "ipaddress_actual"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Validate an email address given a token
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ValidateEmailAddress(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "stoken"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2AutomatedTourney_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetParticipationDetails(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerHistory(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTournamentDetails(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2AutomatedTourney_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetParticipationDetails(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerHistory(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTournamentDetails(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2AutomatedTourney_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetParticipationDetails(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerHistory(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTournamentDetails(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2CustomGames_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGamePlayerCounts(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPopularGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSuggestedGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWhitelist(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWorkshopVoteQueue(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2CustomGames_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGamePlayerCounts(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPopularGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSuggestedGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWhitelist(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWorkshopVoteQueue(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2CustomGames_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGamePlayerCounts(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPopularGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSuggestedGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWhitelist(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWorkshopVoteQueue(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Events_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetArcanaVotes(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCurrentTriviaQuestions(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDraftTriviaMatchInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDraftTriviaVoteCount(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMutations(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTriviaQuestionAnswersSummary(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Events_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetArcanaVotes(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCurrentTriviaQuestions(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDraftTriviaMatchInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDraftTriviaVoteCount(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMutations(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTriviaQuestionAnswersSummary(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Events_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetArcanaVotes(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCurrentTriviaQuestions(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDraftTriviaMatchInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDraftTriviaVoteCount(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMutations(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTriviaQuestionAnswersSummary(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Fantasy_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFantasyPlayerRawStats(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerInfos(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProPlayerInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Fantasy_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFantasyPlayerRawStats(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerInfos(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProPlayerInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Fantasy_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFantasyPlayerRawStats(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerInfos(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProPlayerInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Guild_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  FindGuildByTag(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGuildPersonaInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGuildSummary(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SearchForOpenGuilds(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Guild_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  FindGuildByTag(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGuildPersonaInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGuildSummary(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SearchForOpenGuilds(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Guild_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  FindGuildByTag(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGuildPersonaInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGuildSummary(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SearchForOpenGuilds(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2League_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeagueData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeagueInfoList(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeagueNodeResults(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeaguesData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLiveGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMessages(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPredictionResults(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPredictions(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPrizePool(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2League_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeagueData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeagueInfoList(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeagueNodeResults(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeaguesData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLiveGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMessages(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPredictionResults(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPredictions(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPrizePool(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2League_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeagueData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeagueInfoList(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeagueNodeResults(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLeaguesData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLiveGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMessages(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPredictionResults(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPredictions(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPrizePool(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2MatchStats_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRealtimeStats(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2MatchStats_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRealtimeStats(params?: {
    /**  (Type: uint64, Required: Yes) */
    "server_steam_id": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Match_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLiveLeagueGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMatchDetails(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMatchHistory(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMatchHistoryBySequenceNum(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTeamInfoByTeamID(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTopLiveEventGame(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTopLiveGame(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTopWeekendTourneyGames(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTournamentPlayerStats(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Match_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLiveLeagueGames(params?: {
    /** Only show matches of the specified league id (Type: uint32, Required: No) */
    "league_id"?: number;
    /** Only show matches of the specified match id (Type: uint64, Required: No) */
    "match_id"?: string | number;
    /** Only show matches that are part of the DPC (Type: bool, Required: No) */
    "dpc"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMatchDetails(params?: {
    /** Match id (Type: uint64, Required: Yes) */
    "match_id": string | number;
    /** Include persona names as part of the response (Type: bool, Required: No) */
    "include_persona_names"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMatchHistory(params?: {
    /** The ID of the hero that must be in the matches being queried (Type: uint32, Required: No) */
    "hero_id"?: number;
    /** Which game mode to return matches for (Type: uint32, Required: No) */
    "game_mode"?: number;
    /** The average skill range of the match, these can be [1-3] with lower numbers being lower skill. Ignored if an account ID is specified (Type: uint32, Required: No) */
    "skill"?: number;
    /** Minimum number of human players that must be in a match for it to be returned (Type: string, Required: No) */
    "min_players"?: string;
    /** An account ID to get matches from. This will fail if the user has their match history hidden (Type: string, Required: No) */
    "account_id"?: string;
    /** The league ID to return games from (Type: string, Required: No) */
    "league_id"?: string;
    /** The minimum match ID to start from (Type: uint64, Required: No) */
    "start_at_match_id"?: string | number;
    /** The number of requested matches to return (maximum 100) (Type: string, Required: No) */
    "matches_requested"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMatchHistoryBySequenceNum(params?: {
    /**  (Type: uint64, Required: No) */
    "start_at_match_seq_num"?: string | number;
    /**  (Type: uint32, Required: No) */
    "matches_requested"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTeamInfoByTeamID(params?: {
    /**  (Type: uint64, Required: No) */
    "start_at_team_id"?: string | number;
    /**  (Type: uint32, Required: No) */
    "teams_requested"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTopLiveEventGame(params?: {
    /** Which partner's games to use. (Type: int32, Required: Yes) */
    "partner": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTopLiveGame(params?: {
    /** Which partner's games to use. (Type: int32, Required: Yes) */
    "partner": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTopWeekendTourneyGames(params?: {
    /** Which partner's games to use. (Type: int32, Required: Yes) */
    "partner": number;
    /** Prefer matches from this division. (Type: int32, Required: No) */
    "home_division"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   */
  GetTournamentPlayerStats(params?: {
    /**  (Type: string, Required: Yes) */
    "account_id": string;
    /**  (Type: string, Required: No) */
    "league_id"?: string;
    /**  (Type: string, Required: No) */
    "hero_id"?: string;
    /**  (Type: string, Required: No) */
    "time_frame"?: string;
    /**  (Type: uint64, Required: No) */
    "match_id"?: string | number;
    /**  (Type: uint32, Required: No) */
    "phase_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Operations_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBannedWordList(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Operations_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBannedWordList(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Operations_570 {
  /**
   * 
   * Version: 2
   * HTTP Method: GET
   */
  GetBannedWordList(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Plus_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlusHeroAllyAndEnemyData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlusHeroTimedStats(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlusStatsData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Plus_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlusHeroAllyAndEnemyData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlusHeroTimedStats(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlusStatsData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Plus_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlusHeroAllyAndEnemyData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlusHeroTimedStats(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlusStatsData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2StreamSystem_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcasterInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ListOfUsersSpectating(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2StreamSystem_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcasterInfo(params?: {
    /** 64-bit Steam ID of the broadcaster (Type: uint64, Required: Yes) */
    "broadcaster_steam_id": string | number;
    /** LeagueID to use if we aren't in a lobby (Type: uint32, Required: No) */
    "league_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ListOfUsersSpectating(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Teams_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFanContentStatus(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSingleTeamInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTeamInfos(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Teams_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFanContentStatus(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSingleTeamInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTeamInfos(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Teams_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFanContentStatus(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSingleTeamInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTeamInfos(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Ticket_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamIDForBadgeID(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SetSteamAccountPurchased(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SteamAccountValidForBadgeType(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTA2Ticket_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamIDForBadgeID(params?: {
    /** The badge ID (Type: string, Required: Yes) */
    "BadgeID": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetSteamAccountPurchased(params?: {
    /** The 64-bit Steam ID (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Badge Type (Type: uint32, Required: Yes) */
    "BadgeType": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SteamAccountValidForBadgeType(params?: {
    /** The 64-bit Steam ID (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Valid Badge Type 1 (Type: uint32, Required: Yes) */
    "ValidBadgeType1": number;
    /** Valid Badge Type 2 (Type: uint32, Required: Yes) */
    "ValidBadgeType2": number;
    /** Valid Badge Type 3 (Type: uint32, Required: Yes) */
    "ValidBadgeType3": number;
    /** Valid Badge Type 4 (Type: uint32, Required: No) */
    "ValidBadgeType4"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTAChat_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetChannelMembers(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTAChat_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetChannelMembers(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDOTAChat_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetChannelMembers(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDailyDealService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CancelDailyDeal(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateDailyDeal(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CDailyDeal, Required: No) */
    "daily_deal"?: any;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /**  (Type: fixed64, Required: No) */
    "inviteid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeleteDailyDeal(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDailyDeals(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "rtime32_start_date"?: number;
    /**  (Type: uint32, Required: No) */
    "rtime32_end_date"?: number;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** enum (Type: int32, Required: No) */
    "store_item_type"?: number;
    /**  (Type: string, Required: No) */
    "search_term"?: string;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDailyDealsForApps(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateDailyDeal(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CDailyDeal, Required: No) */
    "daily_deal"?: any;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IDataPublisherService {
  /**
   * Adds a device to the VRDeviceInfo table for the hardware survey
   * 
   * Version: 1
   * HTTP Method: GET
   */
  AddVRDeviceInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Manufacturer for the new device (Type: string, Required: No) */
    "manufacturer"?: string;
    /** Model for the new device (Type: string, Required: No) */
    "model"?: string;
    /** driver name (not including driver_). e.g. lighthouse, oculus, holographic (Type: string, Required: No) */
    "driver"?: string;
    /** controller type for the device. Can be an empty string for devices with no inputs (Type: string, Required: No) */
    "controller_type"?: string;
    /** Class of the device. HMD=1, controller=2, tracker=3, base=4 (Type: int32, Required: No) */
    "device_class"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Generate a debug report of what devices are in the survey
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetVRDeviceInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Number of months for which to generate a report (Type: uint32, Required: No) */
    "month_count"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Set the rollup reference of a single VR device
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SetVRDeviceInfoAggregationReference(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Reference number in the VRDeviceInfo table for the entry to set (Type: uint32, Required: No) */
    "ref"?: number;
    /** Aggregation to set the entry to (Type: uint32, Required: No) */
    "aggregation_ref"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconDOTA2_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetEventStatsForAccount(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetHeroes(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemCreators(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemWorkshopPublishedFileIDs(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRarities(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTournamentPrizePool(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconDOTA2_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetEventStatsForAccount(params?: {
    /** The Event ID of the event you're looking for. (Type: uint32, Required: Yes) */
    "eventid": number;
    /** The account ID to look up. (Type: uint32, Required: Yes) */
    "accountid": number;
    /** The language to provide hero names in. (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetHeroes(params?: {
    /** The language to provide hero names in. (Type: string, Required: No) */
    "language"?: string;
    /** Return a list of itemized heroes only. (Type: bool, Required: No) */
    "itemizedonly"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemCreators(params?: {
    /** The item definition to get creator information for. (Type: uint32, Required: Yes) */
    "itemdef": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemWorkshopPublishedFileIDs(params?: {
    /** The item definition to get published file ids for. (Type: uint32, Required: Yes) */
    "itemdef": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRarities(params?: {
    /** The language to provide rarity names in. (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTournamentPrizePool(params?: {
    /** The ID of the league to get the prize pool of (Type: uint32, Required: No) */
    "leagueid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconItems_1046930 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerItems(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconItems_1269260 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetEquippedPlayerItems(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Return items equipped for this class id (Type: uint32, Required: Yes) */
    "class_id": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconItems_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerItems(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetStoreMetaData(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconItems_440 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerItems(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSchema(params?: {
    /** The language to return the names in. Defaults to returning string keys. (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSchemaItems(params?: {
    /** The language to return the names in. Defaults to returning string keys. (Type: string, Required: No) */
    "language"?: string;
    /** The first item id to return. Defaults to 0. Response will indicate next value to query if applicable. (Type: int32, Required: No) */
    "start"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSchemaOverview(params?: {
    /** The language to return the names in. Defaults to returning string keys. (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSchemaURL(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetStoreMetaData(params?: {
    /** The language to results in. (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetStoreStatus(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconItems_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerItems(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetStoreMetaData(params?: {
    /** The language to results in. (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconItems_583950 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetEquippedPlayerItems(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Return items equipped for this class id (Type: uint32, Required: Yes) */
    "class_id": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconItems_620 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerItems(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSchema(params?: {
    /** The language to return the names in. Defaults to returning string keys. (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconItems_730 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerItems(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   */
  GetSchema(params?: {
    /** The language to return the names in. Defaults to returning string keys. (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   */
  GetSchemaURL(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetStoreMetaData(params?: {
    /** The language to results in. (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconMarketService {
  /**
   * Cancels all of a user's listings for a specific app ID.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  CancelAppListingsForUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The app making the request (Type: uint32, Required: Yes) */
    "appid": number;
    /** The SteamID of the user whose listings should be canceled (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Whether or not to wait until all listings have been canceled before returning the response (Type: bool, Required: Yes) */
    "synchronous": boolean;
    /** This was in response to a VAC ban? (Type: bool, Required: Yes) */
    "vac": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the asset ID of the item sold in a listing
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetAssetID(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The app that's asking. Must match the app of the listing and must belong to the publisher group that owns the API key making the request (Type: uint32, Required: Yes) */
    "appid": number;
    /** The identifier of the listing to get information for (Type: uint64, Required: Yes) */
    "listingid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Checks whether or not an account is allowed to use the market
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetMarketEligibility(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The SteamID of the user to check (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets the most popular items
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetPopular(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The language to use in item descriptions (Type: string, Required: Yes) */
    "language": string;
    /** Number of rows per page (Type: uint32, Required: No) */
    "rows"?: number;
    /** The result number to start at (Type: uint32, Required: Yes) */
    "start": number;
    /** If present, the app ID to limit results to (Type: uint32, Required: Yes) */
    "filter_appid": number;
    /** If present, prices returned will be represented in this currency (Type: uint32, Required: Yes) */
    "ecurrency": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Teaches the market about a kind of item that may be listed on the market in the future.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  LearnItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The app the item belongs to (Type: uint32, Required: Yes) */
    "appid": number;
    /** Asset class property names (Type: string, Required: Yes) */
    "class_name": string;
    /** Asset class property value (Type: string, Required: Yes) */
    "class_value": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEconService {
  /**
   * Flushes the display cache for assets.  This will result in calls to GetAssetClassInfo for each asset class the next time it is displayed.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  FlushAssetAppearanceCache(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Flushes the cache of inventory contents. This will result in calls to GetContexts and GetContextContents to get fresh data for each user next time Steam needs their inventory.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  FlushContextCache(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Flushes the cache for a user's inventory in a specific app context
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  FlushInventoryCache(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** User to clear cache for. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** App to clear cache for. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Context to clear cache for. (Type: uint64, Required: Yes) */
    "contextid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAssetClassInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: CEcon_GetAssetClassInfo_Request.Class[], Required: No) */
    "classes"?: any[];
    /**  (Type: bool, Required: No) */
    "high_pri"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAssetPropertySchema(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets a set of items from a users inventory, along with descriptions
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetInventoryItemsWithDescriptions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint64, Required: No) */
    "contextid"?: string | number;
    /**  (Type: bool, Required: No) */
    "get_descriptions"?: boolean;
    /**  (Type: bool, Required: No) */
    "for_trade_offer_verification"?: boolean;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: CEcon_GetInventoryItemsWithDescriptions_Request.FilterOptions, Required: No) */
    "filters"?: any;
    /**  (Type: uint64, Required: No) */
    "start_assetid"?: string | number;
    /**  (Type: int32, Required: No) */
    "count"?: number;
    /**  (Type: bool, Required: No) */
    "get_asset_properties"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets a history of trades
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTradeHistory(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The number of trades to return information for (Type: uint32, Required: Yes) */
    "max_trades": number;
    /** The time of the last trade shown on the previous page of results, or the time of the first trade if navigating back (Type: uint32, Required: Yes) */
    "start_after_time": number;
    /** The tradeid shown on the previous page of results, or the ID of the first trade if navigating back (Type: uint64, Required: Yes) */
    "start_after_tradeid": string | number;
    /** The user wants the previous page of results, so return the previous max_trades trades before the start time and ID (Type: bool, Required: Yes) */
    "navigating_back": boolean;
    /** If set, the item display data for the items included in the returned trades will also be returned (Type: bool, Required: Yes) */
    "get_descriptions": boolean;
    /** The language to use when loading item display data (Type: string, Required: Yes) */
    "language": string;
    /**  (Type: bool, Required: Yes) */
    "include_failed": boolean;
    /** If set, the total number of trades the account has participated in will be included in the response (Type: bool, Required: Yes) */
    "include_total": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the estimated hold duration and end date that a trade with a user would have
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTradeHoldDurations(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** User you are trading with (Type: uint64, Required: Yes) */
    "steamid_target": string | number;
    /** A special token that allows for trade offers from non-friends. (Type: string, Required: Yes) */
    "trade_offer_access_token": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets a specific trade offer
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTradeOffer(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "tradeofferid": string | number;
    /**  (Type: string, Required: Yes) */
    "language": string;
    /** If set, the item display data for the items included in the returned trade offers will also be returned. If one or more descriptions can't be retrieved, then your request will fail. (Type: bool, Required: Yes) */
    "get_descriptions": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a list of sent or received trade offers
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTradeOffers(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Request the list of sent offers. (Type: bool, Required: Yes) */
    "get_sent_offers": boolean;
    /** Request the list of received offers. (Type: bool, Required: Yes) */
    "get_received_offers": boolean;
    /** If set, the item display data for the items included in the returned trade offers will also be returned. If one or more descriptions can't be retrieved, then your request will fail. (Type: bool, Required: Yes) */
    "get_descriptions": boolean;
    /** The language to use when loading item display data. (Type: string, Required: Yes) */
    "language": string;
    /** Indicates we should only return offers which are still active, or offers that have changed in state since the time_historical_cutoff (Type: bool, Required: Yes) */
    "active_only": boolean;
    /** Indicates we should only return offers which are not active. (Type: bool, Required: Yes) */
    "historical_only": boolean;
    /** When active_only is set, offers updated since this time will also be returned. When historical_only is set, only offers updated since this time are included. (Type: uint32, Required: Yes) */
    "time_historical_cutoff": number;
    /** Cursor aka start index (Type: uint32, Required: No) */
    "cursor"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get counts of pending and new trade offers
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTradeOffersSummary(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The time the user last visited.  If not passed, will use the time the user last visited the trade offer page. (Type: uint32, Required: Yes) */
    "time_last_visit": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets status for a specific trade
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTradeStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "tradeid": string | number;
    /** If set, the item display data for the items included in the returned trades will also be returned (Type: bool, Required: Yes) */
    "get_descriptions": boolean;
    /** The language to use when loading item display data (Type: string, Required: Yes) */
    "language": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SendGift(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid_target"?: string | number;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: CEcon_Asset, Required: No) */
    "item_to_give"?: any;
    /**  (Type: string, Required: No) */
    "webcookie"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IEmbeddedClientService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  AuthorizeDevice(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IFamilyGroupsService {
  /**
   * Cancel a pending invite to the specified family group
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CancelFamilyGroupInvite(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid_to_cancel"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ClearCooldownSkip(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "invite_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ConfirmInviteToFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "invite_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "nonce"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ConfirmJoinFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "invite_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "nonce"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Creates a new family group
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "name"?: string;
    /** (Support only) User to create this family group for and add to the group. (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Delete the specified family group
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeleteFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ForceAcceptInvite(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Return a log of changes made to this family group
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetChangeLog(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Retrieves family group info
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: bool, Required: No) */
    "send_running_apps"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets the family group id for the authenticated user or a user specified by a support account
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFamilyGroupForUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Actually optional. This should only be set when support or admin accounts needs to fetch the family group for another user. Outside of the support tool it should be omitted. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: bool, Required: No) */
    "include_family_group_response"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetInviteCheckResults(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the playtimes in all apps from the shared library for the whole family group.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetPlaytimeSummary(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "family_groupid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPreferredLenders(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get pending purchase requests for the family
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPurchaseRequests(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: bool, Required: No) */
    "include_completed"?: boolean;
    /**  (Type: uint64[], Required: No) */
    "request_ids"?: string | number[];
    /**  (Type: uint32, Required: No) */
    "rt_include_completed_since"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Return a list of apps available from other members
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSharedLibraryApps(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: bool, Required: No) */
    "include_own"?: boolean;
    /**  (Type: bool, Required: No) */
    "include_excluded"?: boolean;
    /**  (Type: bool, Required: No) */
    "include_free"?: boolean;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: uint32, Required: No) */
    "max_apps"?: number;
    /**  (Type: bool, Required: No) */
    "include_non_games"?: boolean;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get lenders or borrowers sharing device with
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUsersSharingDevice(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: int32, Required: No) */
    "client_session_id"?: number;
    /**  (Type: uint64, Required: No) */
    "client_instance_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Invites an account to a family group
   * 
   * Version: 1
   * HTTP Method: POST
   */
  InviteToFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "receiver_steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "receiver_role"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Join the specified family group
   * 
   * Version: 1
   * HTTP Method: POST
   */
  JoinFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "nonce"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Modify the details of the specified family group
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ModifyFamilyGroupDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /** If present, set the family name to the current value (Type: string, Required: No) */
    "name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Remove the specified account from the specified family group
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveFromFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid_to_remove"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Request purchase of the specified cart
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RequestPurchase(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Requester's family group id' (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /** The shopping cart with items to purchase. (Type: uint64, Required: No) */
    "gidshoppingcart"?: string | number;
    /** The store country code of the requestor. (Type: string, Required: No) */
    "store_country_code"?: string;
    /** Request the contents of the account cart instead of gidshoppingcart? (Type: bool, Required: No) */
    "use_account_cart"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ResendInvitationToFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Act on a purchase request
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RespondToRequestedPurchase(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Purchase requester's family group id' (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /** Purchase requester's steam id' (Type: fixed64, Required: No) */
    "purchase_requester_steamid"?: string | number;
    /** Action being taken (Type: int32, Required: No) */
    "action"?: number;
    /** Unique purchase request ID (Type: uint64, Required: No) */
    "request_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RollbackFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "rtime32_target"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Set the number of times a family group's cooldown time should be ignored for joins.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetFamilyCooldownOverrides(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The family group to set the cooldown overrides on (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /** How many cooldown overrides this family group should have (Type: uint32, Required: No) */
    "cooldown_count"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetPreferredLender(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "lender_steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UndeleteFamilyGroup(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "family_groupid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IForumsService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeleteModeratedComment(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "comment_thread_type"?: number;
    /**  (Type: uint64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidfeature2"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidcomment"?: string | number;
    /** enum (Type: int32, Required: No) */
    "reason"?: number;
    /** enum (Type: int32, Required: No) */
    "resolution"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeleteModeratedTopic(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "comment_thread_type"?: number;
    /**  (Type: uint64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidfeature2"?: string | number;
    /** enum (Type: int32, Required: No) */
    "reason"?: number;
    /** enum (Type: int32, Required: No) */
    "resolution"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTopicDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidforum"?: string | number;
    /**  (Type: string, Required: No) */
    "forumtype"?: string;
    /**  (Type: uint64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: uint64[], Required: No) */
    "gidtopics"?: string | number[];
    /**  (Type: bool, Required: No) */
    "include_preview"?: boolean;
    /**  (Type: bool, Required: No) */
    "include_full_text"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ReportPost(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "forum_type"?: string;
    /**  (Type: int64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidforum"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidtopic"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidcomment"?: string | number;
    /**  (Type: string, Required: No) */
    "authorname"?: string;
    /**  (Type: string, Required: No) */
    "reportername"?: string;
    /**  (Type: string, Required: No) */
    "report"?: string;
    /** enum (Type: int32, Required: No) */
    "report_type"?: number;
    /** enum (Type: int32, Required: No) */
    "report_reason"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ResolveReportedPost(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidforum"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidtopic"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidpost"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ResolveReportedPosts(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "forumtype"?: string;
    /**  (Type: uint64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidtopic"?: string | number;
    /**  (Type: string, Required: No) */
    "audit_note"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SanctionReportedPost(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidforum"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidtopic"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidpost"?: string | number;
    /** enum (Type: int32, Required: No) */
    "reason"?: number;
    /**  (Type: CForums_SanctionReportedPost_Request_Sanction[], Required: No) */
    "sanctions"?: any[];
    /**  (Type: string, Required: No) */
    "note"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetTopicLocked(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidforum"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidtopic"?: string | number;
    /**  (Type: bool, Required: No) */
    "locked"?: boolean;
    /**  (Type: string, Required: No) */
    "audit_note"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UndeleteDisputedComment(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "comment_thread_type"?: number;
    /**  (Type: uint64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidfeature2"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidcomment"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UndeleteDisputedTopic(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "comment_thread_type"?: number;
    /**  (Type: uint64, Required: No) */
    "gidfeature"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidfeature2"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IFriendMessagesService {
  /**
   * Get information about recent offline messages and chats
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetActiveMessageSessions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** return only session information where a chat message has been sent since this time (for polling) (Type: uint32, Required: No) */
    "lastmessage_since"?: number;
    /** If non-zero, return only message sessions that have messages since our message cutoff. If zero, we return all active sessions. (Type: bool, Required: No) */
    "only_sessions_with_messages"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a log of recent chat messages between two users
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRecentMessages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid1"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid2"?: string | number;
    /** If non-zero, cap the number of recent messages to return. (Type: uint32, Required: No) */
    "count"?: number;
    /** Grab the block of chat from the most recent conversation (a ~5 minute period) (Type: bool, Required: No) */
    "most_recent_conversation"?: boolean;
    /** If non-zero, return only messages with timestamps greater or equal to this. If zero, we only return messages from a recent time cutoff. (Type: fixed32, Required: No) */
    "rtime32_start_time"?: number;
    /** Return the results with bbcode formatting. (Type: bool, Required: No) */
    "bbcode_format"?: boolean;
    /** Combined with start time, only messages after this ordinal are returned (dedupes messages in same second) (Type: uint32, Required: No) */
    "start_ordinal"?: number;
    /** if present/non-zero, return only messages before this. (Type: uint32, Required: No) */
    "time_last"?: number;
    /**  (Type: uint32, Required: No) */
    "ordinal_last"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MarkOfflineMessagesRead(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid_friend"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ResolveReport(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid_from"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid_to"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_group_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "subject_id"?: string | number;
    /** enum (Type: int32, Required: No) */
    "resolution"?: number;
    /** enum (Type: int32, Required: No) */
    "reason"?: number;
    /**  (Type: bool, Required: No) */
    "skip_lock"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IFriendsListService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFavorites(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFriendsList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_1046930 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_1269260 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_1422450 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_2305270 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_247040 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_3488080 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_3781850 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_440 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_570 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_583950 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClientVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGCVersion_730 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerVersion(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGameCoordinator {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMessages(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  PostMessages(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGameInventory {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAssetClassInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAssetPrices(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetContexts(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetHistoryCommandDetails(params?: {
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** The steam ID of the account to operate on (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The command to run on that asset (Type: string, Required: Yes) */
    "command": string;
    /** The context to fetch history for (Type: uint64, Required: Yes) */
    "contextid": string | number;
    /** The arguments that were provided with the command in the first place (Type: string, Required: Yes) */
    "arguments": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemDefArchive(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetUserHistory(params?: {
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** The Steam ID to fetch history for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The context to fetch history for (Type: uint64, Required: Yes) */
    "contextid": string | number;
    /** Start time of the history range to collect (Type: uint32, Required: Yes) */
    "starttime": number;
    /** End time of the history range to collect (Type: uint32, Required: Yes) */
    "endtime": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  HistoryExecuteCommands(params?: {
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** The asset ID to operate on (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The context to fetch history for (Type: uint64, Required: Yes) */
    "contextid": string | number;
    /** A unique 32 bit ID for the support person executing the command (Type: uint32, Required: Yes) */
    "actorid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  SupportGetAssetHistory(params?: {
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** The asset ID to operate on (Type: uint64, Required: Yes) */
    "assetid": string | number;
    /** The context to fetch history for (Type: uint64, Required: Yes) */
    "contextid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateItemDefs(params?: {
    /** Steamworks Web API publisher authentication key. (Type: string, Required: Yes) */
    "key"?: string;
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** One or more Item Definitions, presented as a JSON array, to be updated or created. (Type: JSON array, Required: Yes) */
    "itemdefs": any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGameNotificationsService {
  /**
   * Creates an async game session
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  CreateSession(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The appid to create the session for. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Game-specified context value the game can used to associate the session with some object on their backend. (Type: uint64, Required: Yes) */
    "context": string | number;
    /** The title of the session to be displayed within each user's list of sessions. (Type: {message}, Required: Yes) */
    "title": any;
    /** The initial state of all users in the session. (Type: {message}, Required: Yes) */
    "users": any;
    /** steamid to make the request on behalf of -- if specified, the user must be in the session and all users being added to the session must be friends with the user. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Deletes an async game session
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  DeleteSession(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The sessionid to delete. (Type: uint64, Required: Yes) */
    "sessionid": string | number;
    /** The appid of the session to delete. (Type: uint32, Required: Yes) */
    "appid": number;
    /** steamid to make the request on behalf of -- if specified, the user must be in the session. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Deletes a batch of async game sessions
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  DeleteSessionBatch(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The sessionid to delete. (Type: uint64, Required: Yes) */
    "sessionid": string | number;
    /** The appid of the session to delete. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Enumerates a user's sessions
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  EnumerateSessionsForApp(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The sessionid to request details for. Optional. If not specified, all the user's sessions will be returned. (Type: uint32, Required: Yes) */
    "appid": number;
    /** The user whose sessions are to be enumerated. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Boolean determining whether the message for all users should be included. Defaults to false. (Type: bool, Required: No) */
    "include_all_user_messages"?: boolean;
    /** Boolean determining whether the message for the authenticated user should be included. Defaults to false. (Type: bool, Required: No) */
    "include_auth_user_message"?: boolean;
    /** Language to localize the text in. (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the details for a specific session
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetSessionDetailsForApp(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: {message}, Required: Yes) */
    "sessions": any;
    /** The appid for the sessions. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Language to localize the text in. (Type: string, Required: Yes) */
    "language": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Requests that a user receive game notifications for an app
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RequestNotifications(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The steamid to request notifications for. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The appid to request notifications for. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Updates a game session
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  UpdateSession(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The sessionid to update. (Type: uint64, Required: Yes) */
    "sessionid": string | number;
    /** The appid of the session to update. (Type: uint32, Required: Yes) */
    "appid": number;
    /** The new title of the session.  If not specified, the title will not be changed. (Type: {message}, Required: No) */
    "title"?: any;
    /** A list of users whose state will be updated to reflect the given state. If the users are not already in the session, they will be added to it. (Type: {message}, Required: No) */
    "users"?: any;
    /** steamid to make the request on behalf of -- if specified, the user must be in the session and all users being added to the session must be friends with the user. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Creates an async game session
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UserCreateSession(params?: {
    /** The appid to create the session for. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Game-specified context value the game can used to associate the session with some object on their backend. (Type: uint64, Required: Yes) */
    "context": string | number;
    /** The title of the session to be displayed within each user's list of sessions. (Type: {message}, Required: Yes) */
    "title": any;
    /** The initial state of all users in the session. (Type: {message}, Required: Yes) */
    "users": any;
    /** steamid to make the request on behalf of -- if specified, the user must be in the session and all users being added to the session must be friends with the user. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Deletes an async game session
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UserDeleteSession(params?: {
    /** The sessionid to delete. (Type: uint64, Required: Yes) */
    "sessionid": string | number;
    /** The appid of the session to delete. (Type: uint32, Required: Yes) */
    "appid": number;
    /** steamid to make the request on behalf of -- if specified, the user must be in the session. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Updates an async game session
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UserUpdateSession(params?: {
    /** The sessionid to update. (Type: uint64, Required: Yes) */
    "sessionid": string | number;
    /** The appid of the session to update. (Type: uint32, Required: Yes) */
    "appid": number;
    /** The new title of the session.  If not specified, the title will not be changed. (Type: {message}, Required: No) */
    "title"?: any;
    /** A list of users whose state will be updated to reflect the given state. If the users are not already in the session, they will be added to it. (Type: {message}, Required: No) */
    "users"?: any;
    /** steamid to make the request on behalf of -- if specified, the user must be in the session and all users being added to the session must be friends with the user. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGamePerformanceStatsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGameFrameRateStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGameRecordingClipService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSingleSharedClip(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "clip_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IGameServersService {
  /**
   * Creates a persistent game server account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateAccount(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The app to use the account for (Type: uint32, Required: Yes) */
    "appid": number;
    /** The memo to set on the new account (Type: string, Required: Yes) */
    "memo": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Deletes a persistent game server account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeleteAccount(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The SteamID of the game server account to delete (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Perform a query on a specific server by FakeIP
   * 
   * Version: 1
   * HTTP Method: GET
   */
  FriendsQuery(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: {message}, Required: Yes) */
    "servers": any;
    /**  (Type: uint64, Required: Yes) */
    "friends": string | number;
    /**  (Type: uint32, Required: Yes) */
    "app_id": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets a list of game server accounts with their logon tokens
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAccountList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets public information about a given game server account
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAccountPublicInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The SteamID of the game server to get info on (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets a list of server IP addresses given a list of SteamIDs
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerIPsBySteamID(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "server_steamids": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets a list of servers given a filter string
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Query filter string. (Type: string, Required: No) */
    "filter"?: string;
    /** The maximum number of servers to return in the response (Type: uint32, Required: No) */
    "limit"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets a list of server SteamIDs given a list of IPs
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerSteamIDsByIP(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: Yes) */
    "server_ips": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Perform a query on a specific server by FakeIP
   * 
   * Version: 1
   * HTTP Method: GET
   */
  QueryByFakeIP(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** FakeIP of server to query. (Type: uint32, Required: Yes) */
    "fake_ip": number;
    /** Fake port of server to query. (Type: uint32, Required: Yes) */
    "fake_port": number;
    /** AppID to use.  Each AppID has its own FakeIP address. (Type: uint32, Required: Yes) */
    "app_id": number;
    /** What type of query? (Type: {enum}, Required: Yes) */
    "query_type": any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Queries the status of the specified token, which must be owned by you
   * 
   * Version: 1
   * HTTP Method: GET
   */
  QueryLoginToken(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Login token to query (Type: string, Required: Yes) */
    "login_token": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Generates a new login token for the specified game server
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ResetLoginToken(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The SteamID of the game server to reset the login token of (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * performs a GSLT ban/unban of GSLT associated with a GS. If banning, also bans associated users' GSLTs.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SetBanStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: bool, Required: Yes) */
    "banned": boolean;
    /**  (Type: uint32, Required: Yes) */
    "ban_seconds": number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * This method changes the memo associated with the game server account. Memos do not affect the account in any way. The memo shows up in the GetAccountList response and serves only as a reminder of what the account is used for.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetMemo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The SteamID of the game server to set the memo on (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The memo to set on the new account (Type: string, Required: Yes) */
    "memo": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IHardwareTeamService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRMAUpdates(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string[], Required: No) */
    "product_names"?: string[];
    /**  (Type: fixed64, Required: No) */
    "last_change_number"?: string | number;
    /**  (Type: uint32, Required: No) */
    "max_results"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IHelpRequestLogsService {
  /**
   * Returns whether the server would like the user to upload logs
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetApplicationLogDemand(params?: {
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * User uploading application logs
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UploadUserApplicationLog(params?: {
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: string, Required: Yes) */
    "log_type": string;
    /**  (Type: string, Required: Yes) */
    "version_string": string;
    /**  (Type: string, Required: Yes) */
    "log_contents": string;
    /**  (Type: uint64, Required: Yes) */
    "request_id": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IInventoryService {
  /**
   * Adds an item to a user's inventory
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  AddItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "itemdefid": string | number;
    /**  (Type: string, Required: Yes) */
    "itempropsjson": string;
    /**  (Type: uint32, Required: Yes) */
    "itemquantity": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Should notify the user that the item was added to their Steam Inventory. (Type: bool, Required: Yes) */
    "notify": boolean;
    /**  (Type: uint64, Required: Yes) */
    "requestid": string | number;
    /** If true, apply the default trade and market restriction times to this item. (Type: bool, Required: Yes) */
    "trade_restriction": boolean;
    /** If set, treat requestid as a txnid and create this item as a result of user microtransaction purchase. (Type: bool, Required: No) */
    "is_purchase"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Adds a promo item to a user's inventory
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  AddPromoItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "itemdefid": string | number;
    /**  (Type: string, Required: Yes) */
    "itempropsjson": string;
    /**  (Type: uint32, Required: Yes) */
    "itemquantity": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Should notify the user that the item was added to their Steam Inventory. (Type: bool, Required: Yes) */
    "notify": boolean;
    /**  (Type: uint64, Required: Yes) */
    "requestid": string | number;
    /** If true, apply the default trade and market restriction times to this item. (Type: bool, Required: Yes) */
    "trade_restriction": boolean;
    /** If set, treat requestid as a txnid and create this item as a result of user microtransaction purchase. (Type: bool, Required: No) */
    "is_purchase"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ArchiveItemDef(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint64, Required: No) */
    "itemdefid"?: string | number;
    /**  (Type: bool, Required: No) */
    "archive"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Combine two stacks of items
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CombineItemStacks(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "fromitemid": string | number;
    /**  (Type: uint64, Required: Yes) */
    "destitemid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "quantity": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Consolidate items of the given type within an user's inventory
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  Consolidate(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: uint64, Required: Yes) */
    "itemdefid": string | number;
    /**  (Type: bool, Required: No) */
    "force"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Consolidate all items within an user's inventory
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ConsolidateAll(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: bool, Required: Yes) */
    "force": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Consume an item
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ConsumeItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Item ID to be consumed (Type: uint64, Required: No) */
    "itemid"?: string | number;
    /** Amount of the given item stack to be consumed (Type: uint32, Required: No) */
    "quantity"?: number;
    /**  (Type: string, Required: No) */
    "timestamp"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Clients may provide a unique identifier for a request to perform at most once execution.             When a requestid is resubmitted, it will not cause the work to be performed again; the             response message will be the current state of items affected by the original successful             execution. (Type: uint64, Required: No) */
    "requestid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Craft an item in a user's inventory
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ExchangeItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: uint64, Required: Yes) */
    "materialsitemid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "materialsquantity": number;
    /**  (Type: uint64, Required: Yes) */
    "outputitemdefid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets a list of items that have been added to accounts
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetAddItemHistory(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint32, Required: No) */
    "max_results"?: number;
    /**  (Type: uint64, Required: Yes) */
    "start_highwater": string | number;
    /**  (Type: uint32, Required: Yes) */
    "start_timestamp": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Retrieves a users inventory as a big JSON blob
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetInventory(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get metadata about the current item definition for this game.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemDefMeta(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get item definitions
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetItemDefs(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: string, Required: Yes) */
    "modifiedsince": string;
    /**  (Type: uint64, Required: Yes) */
    "itemdefids": string | number;
    /**  (Type: uint64, Required: Yes) */
    "workshopids": string | number;
    /** Allow stale data to be returned for the specified number of seconds. (Type: uint32, Required: No) */
    "cache_max_age_seconds"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the Inventory Service price sheet
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPriceSheet(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: int32, Required: Yes) */
    "ecurrency": number;
    /** Standard short code of the requested currency (preferred) (Type: string, Required: Yes) */
    "currency_code": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the total number of available items of the given type
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetQuantity(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: uint64[], Required: Yes) */
    "itemdefid": string | number[];
    /**  (Type: bool, Required: No) */
    "force"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Modify an item in a user's inventory
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ModifyItems(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: {message}, Required: Yes) */
    "updates": any;
    /**  (Type: uint32, Required: Yes) */
    "timestamp": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Split an item stack into two stacks
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SplitItemStack(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "itemid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "quantity": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ILobbyMatchmakingService {
  /**
   * Creates a lobby and sets its related lobby data
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  CreateLobby(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: int32, Required: Yes) */
    "max_members": number;
    /**  (Type: int32, Required: Yes) */
    "lobby_type": number;
    /**  (Type: string, Required: Yes) */
    "lobby_name": string;
    /**  (Type: uint64, Required: Yes) */
    "steamid_invited_members": string | number;
    /**  (Type: {message}, Required: Yes) */
    "lobby_metadata": any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns lobby data and member list
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetLobbyData(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid_lobby": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Removes a user from a lobby
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RemoveUserFromLobby(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint64, Required: Yes) */
    "steamid_lobby": string | number;
    /**  (Type: uint64, Required: Yes) */
    "steamid_to_remove": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ILoyaltyRewardsService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddReaction(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "target_type"?: number;
    /**  (Type: uint64, Required: No) */
    "targetid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "reactionid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  BatchedQueryRewardItems(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CLoyaltyRewards_QueryRewardItems_Request[], Required: No) */
    "requests"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetActivePurchaseBonuses(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetEligibleApps(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetEquippedProfileItems(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** language short name (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPointsForSpend(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: int64, Required: No) */
    "amount"?: string | number;
    /**  (Type: uint32, Required: No) */
    "ecurrency"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProfileCustomizationsConfig(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReactionConfig(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: int32, Required: No) */
    "elanguage"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReactions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "target_type"?: number;
    /**  (Type: uint64, Required: No) */
    "targetid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReactionsSummaryForUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSummary(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  QueryRewardItems(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /**  (Type: uint32, Required: No) */
    "time_available"?: number;
    /**  (Type: int32[], Required: No) */
    "community_item_classes"?: number[];
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: int32, Required: No) */
    "count"?: number;
    /**  (Type: string, Required: No) */
    "cursor"?: string;
    /** enum (Type: int32, Required: No) */
    "sort"?: number;
    /**  (Type: bool, Required: No) */
    "sort_descending"?: boolean;
    /** enum (Type: int32[], Required: No) */
    "reward_types"?: number[];
    /**  (Type: int32[], Required: No) */
    "excluded_community_item_classes"?: number[];
    /**  (Type: uint32[], Required: No) */
    "definitionids"?: number[];
    /** enum (Type: int32[], Required: No) */
    "filters"?: number[];
    /**  (Type: string[], Required: No) */
    "filter_match_all_category_tags"?: string[];
    /**  (Type: string[], Required: No) */
    "filter_match_any_category_tags"?: string[];
    /**  (Type: uint32[], Required: No) */
    "contains_definitionids"?: number[];
    /**  (Type: bool, Required: No) */
    "include_direct_purchase_disabled"?: boolean;
    /**  (Type: uint32[], Required: No) */
    "excluded_content_descriptors"?: number[];
    /**  (Type: uint32[], Required: No) */
    "excluded_appids"?: number[];
    /**  (Type: string, Required: No) */
    "search_term"?: string;
    /**  (Type: uint32[], Required: No) */
    "store_tagids"?: number[];
    /**  (Type: string, Required: No) */
    "search_term__field_21"?: string;
    /**  (Type: uint32[], Required: No) */
    "excluded_store_tagids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RedeemPoints(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "defid"?: number;
    /**  (Type: int64, Required: No) */
    "expected_points_cost"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RedeemPointsForBadgeLevel(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "defid"?: number;
    /**  (Type: int32, Required: No) */
    "num_levels"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RedeemPointsForProfileCustomization(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "customization_type"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RedeemPointsForProfileCustomizationUpgrade(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "customization_type"?: number;
    /**  (Type: uint32, Required: No) */
    "new_level"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RedeemPointsToUpgradeItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "defid"?: number;
    /**  (Type: int64, Required: No) */
    "expected_points_cost"?: string | number;
    /**  (Type: uint64, Required: No) */
    "communityitemid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RegisterForSteamDeckRewards(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "serial_number"?: string;
    /**  (Type: string, Required: No) */
    "controller_code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IMarketingMessagesService {
  /**
   * Create a new marketing message.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateMarketingMessage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CMarketingMessageProto, Required: No) */
    "message"?: any;
    /** If set, then overwrite the template_vars and additional_restrictions keyvalues from json (Type: bool, Required: No) */
    "from_json"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Delete a marketing message.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeleteMarketingMessage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns a boolean if the user has pending marketing messages.  Intended to be fast.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  DoesUserHavePendingMarketingMessages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "country_code"?: string;
    /**  (Type: int32, Required: No) */
    "elanguage"?: number;
    /** EOSType from client (Type: int32, Required: No) */
    "operating_system"?: number;
    /**  (Type: int32, Required: No) */
    "client_package_version"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Search for marketing messages by name, type, etc.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  FindMarketingMessages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: EMarketingMessageLookupType, Required: No) */
    "lookup_type"?: any;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** enum (Type: EMarketingMessageType, Required: No) */
    "message_type"?: any;
    /**  (Type: fixed64[], Required: No) */
    "gidlist"?: string | number[];
    /**  (Type: string, Required: No) */
    "title"?: string;
    /**  (Type: uint32, Required: No) */
    "associated_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a list of active marketing messages.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetActiveMarketingMessages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "country"?: string;
    /** Will not return any marketing message that requires ownership/playtime/wishlist (Type: bool, Required: No) */
    "anonymous_user"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a single marketing message, cacheable.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDisplayMarketingMessage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /** If passed, item data will be returned (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a single marketing message, cacheable.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDisplayMarketingMessageAdmin(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /** If passed, item data will be returned (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a single marketing message, which can be customized per user.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDisplayMarketingMessageForUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /** If passed, item data will be returned (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a single marketing message.  Admin account needed for non-active messages
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetMarketingMessage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetMarketingMessageClickedStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * For a specific marketing message, then all of the viewership stats for the date range it was intended to be visible to customers
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetMarketingMessageViewerStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetMarketingMessagesForApps(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMarketingMessagesForPartner(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a list of active marketing messages filtered for a specific user.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMarketingMessagesForUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: bool, Required: No) */
    "include_seen_messages"?: boolean;
    /**  (Type: string, Required: No) */
    "country_code"?: string;
    /**  (Type: int32, Required: No) */
    "elanguage"?: number;
    /** EOSType from client (Type: int32, Required: No) */
    "operating_system"?: number;
    /**  (Type: int32, Required: No) */
    "client_package_version"?: number;
    /** Optional, server can fill in from country code/language if not set (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /** If passed, item data will be returned (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * For a time range, return the seen stats across all of the marketing messages
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetMarketingMessagesViewerRangeStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "rt_start_time"?: number;
    /**  (Type: uint32, Required: No) */
    "rt_end_time"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * partner endpoint to get a marketing message preview that is approved for publishing
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPartnerMessagePreview(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Are there any marketing messages that are staged for this partner to control publishing and visibility upon?
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPartnerReadyToPublishMessages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPastMarketingMessages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "start_past_days"?: number;
    /**  (Type: uint32, Required: No) */
    "upto_past_days"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MarkMessageClicked(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "display_index"?: number;
    /** enum (Type: int32, Required: No) */
    "template_type"?: number;
    /** enum (Type: int32, Required: No) */
    "click_location"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Mark that a user has viewed a message (so we won't show it again)'.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MarkMessageSeen(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** Where in the stack was the marketing message, 1-based, zero means we don't know (Type: uint32, Required: No) */
    "display_index"?: number;
    /** Which type of template did they see (Type: EMarketingMessageTemplateType, Required: No) */
    "template_type"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * partner endpoint to publish a marketing message
   * 
   * Version: 1
   * HTTP Method: GET
   */
  PublishPartnerMessage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Modify a marketing message.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateMarketingMessage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /**  (Type: CMarketingMessageProto, Required: No) */
    "message"?: any;
    /** If set, then overwrite the template_vars and additional_restrictions keyvalues from json (Type: bool, Required: No) */
    "from_json"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IMobileAppService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetMobileSummary(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** GID of the mobile app's authenticator for this user (Type: fixed64, Required: No) */
    "authenticator_gid"?: string | number;
    /**  (Type: string, Required: No) */
    "device_identifier"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IMobileAuthService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWGToken(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MigrateMobileSession(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steam ID of the user to migrate (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** WG Token to migrate (Type: string, Required: No) */
    "token"?: string;
    /** Signature over the wg token using the user's 2FA token (Type: bytes, Required: No) */
    "signature"?: string | number;
    /** User-supplied description of the authenticating device (Type: CMobileAuth_MigrateMobileSession_Request_DeviceDetails, Required: No) */
    "device_details"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IMobileDeviceService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeregisterMobileDevice(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "deviceid"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RegisterMobileDevice(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Mobile device ID string sent up by the mobile device, e.g. 'GOOG:abcdefg...' or 'AAPL:123456...' (Type: string, Required: No) */
    "deviceid"?: string;
    /** Language the mobile app is configured for (see s_LanguageNames::m_pchShortName for acceptable values). (Type: string, Required: No) */
    "language"?: string;
    /** True if push is enabled on this device, false otherwise. (Type: bool, Required: No) */
    "push_enabled"?: boolean;
    /** Steam mobile application version string, e.g. 1.2.1 (Type: string, Required: No) */
    "app_version"?: string;
    /** Mobile device OS version string, e.g. 6.1.0 (Type: string, Required: No) */
    "os_version"?: string;
    /** Mobile device model, e.g. iPhone, iPad, Nexus 7 (Type: string, Required: No) */
    "device_model"?: string;
    /** Identifier used by two-factor provider (Type: string, Required: No) */
    "twofactor_device_identifier"?: string;
    /** Which app is this? (Type: int32, Required: No) */
    "mobile_app"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IMobileNotificationService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserNotificationCounts(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface INewsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ConvertHTMLToBBCode(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "content"?: string;
    /** by default, newlines are all removed and then <p> and <br> will become newlines (Type: bool, Required: No) */
    "preserve_newlines"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBatchPublishedPartnerEvent(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Gid of news source (Type: fixed64, Required: No) */
    "news_feed_gid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "start_index"?: number;
    /**  (Type: uint32, Required: No) */
    "amount"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetNewsFeedByRepublishClan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The clan account ID which we are republishing to (Type: uint32, Required: No) */
    "clan_account_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  PreviewPartnerEvents(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "rss_url"?: string;
    /**  (Type: uint32, Required: No) */
    "lang"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PublishPartnerEvent(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The post user wants to publish that was previously received from Preview method (Type: CNewsFeedPostDef, Required: No) */
    "post"?: any;
    /** If true, then create the partner event in draft mode (Type: bool, Required: No) */
    "draft"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IOnlinePlayService {
  /**
   * Get coplay status for two accounts
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  GetCoPlayStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steam ID 1 of request (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Steam ID 2 of request (Type: uint64, Required: Yes) */
    "steamid2": string | number;
    /** App ID of request (Type: uint32, Required: Yes) */
    "appid": number;
    /** unix time range begin to check (Type: uint32, Required: Yes) */
    "time_range_begin": number;
    /** unix time range end to check (Type: uint32, Required: Yes) */
    "time_range_end": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IParentalService {
  /**
   * Approve or deny temporary access to a feature from a child account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ApproveFeatureAccess(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Approve or deny temporary access to a feature from a child account (Type: bool, Required: No) */
    "approve"?: boolean;
    /**  (Type: fixed64, Required: No) */
    "requestid"?: string | number;
    /** Approve or deny temporary access to a feature from a child account (Type: uint32, Required: No) */
    "features"?: number;
    /** Approve or deny temporary access to a feature from a child account (Type: uint32, Required: No) */
    "duration"?: number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Approve or deny a temporary playtime request from a child account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ApprovePlaytime(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: bool, Required: No) */
    "approve"?: boolean;
    /**  (Type: fixed64, Required: No) */
    "requestid"?: string | number;
    /**  (Type: ParentalTemporaryPlaytimeRestrictions, Required: No) */
    "restrictions_approved"?: any;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Disable parental settings for the logged in account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DisableParentalSettings(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "password"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Enable parental settings for the logged in account, optionally setting the current settings
   * 
   * Version: 1
   * HTTP Method: POST
   */
  EnableParentalSettings(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "password"?: string;
    /**  (Type: ParentalSettings, Required: No) */
    "settings"?: any;
    /**  (Type: string, Required: No) */
    "sessionid"?: string;
    /**  (Type: uint32, Required: No) */
    "enablecode"?: number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the current parental settings for the logged in account
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetParentalSettings(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Return a list of pending (or pending and completed) feature and playtime requests for the given steamid
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRequests(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Return a list of pending (or pending and completed) feature and playtime requests for the given steamid (Type: uint32, Required: No) */
    "rt_include_completed_since"?: number;
    /** Return a list of pending (or pending and completed) feature and playtime requests for the given steamid (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "family_groupid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the current parental settings for the logged in account in a form that can by verified by the receiver
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSignedParentalSettings(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "priority"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Notify connected clients that a lock has occurred in a browser
   * 
   * Version: 1
   * HTTP Method: POST
   */
  LockClient(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "session"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Request temporary access to a feature from a parent account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RequestFeatureAccess(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Request temporary access to a feature from a parent account (Type: uint32, Required: No) */
    "features"?: number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Request temporary additional playtime from a parent account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RequestPlaytime(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Request temporary additional playtime from a parent account (Type: uint32, Required: No) */
    "time_expires"?: number;
    /** Request temporary additional playtime from a parent account (Type: ParentalPlaytimeDay, Required: No) */
    "current_playtime_restrictions"?: any;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Request a recovery code be sent to the recovery email address for the specified account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RequestRecoveryCode(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Set the current parental settings for the logged in account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetParentalSettings(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "password"?: string;
    /**  (Type: ParentalSettings, Required: No) */
    "settings"?: any;
    /**  (Type: string, Required: No) */
    "new_password"?: string;
    /**  (Type: string, Required: No) */
    "sessionid"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Validate the plaintext password for the logged in account and return an unlock token
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ValidatePassword(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "password"?: string;
    /**  (Type: string, Required: No) */
    "session"?: string;
    /**  (Type: bool, Required: No) */
    "send_unlock_on_success"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Check if the given parental unlock token is correct for the logged in account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ValidateToken(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "unlock_token"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPartnerAppNotesService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateNotes(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "partner_notes"?: string;
    /**  (Type: string, Required: No) */
    "admin_notes"?: string;
    /**  (Type: string, Required: No) */
    "partner_readonly_notes"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMultipleNotes(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetNotes(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateNotes(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "partner_notes"?: string;
    /**  (Type: string, Required: No) */
    "admin_notes"?: string;
    /**  (Type: string, Required: No) */
    "partner_readonly_notes"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPartnerDeadlineService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDeadlineByTimeRange(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "type"?: number;
    /**  (Type: uint32, Required: No) */
    "start_date"?: number;
    /**  (Type: uint32, Required: No) */
    "end_date"?: number;
    /**  (Type: bool, Required: No) */
    "include_complete"?: boolean;
    /** enum (Type: int32, Required: No) */
    "store_item_type"?: number;
    /**  (Type: uint32, Required: No) */
    "store_item_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDeadlinesForPartner(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /**  (Type: uint32, Required: No) */
    "start_date"?: number;
    /**  (Type: uint32, Required: No) */
    "end_date"?: number;
    /**  (Type: bool, Required: No) */
    "include_complete"?: boolean;
    /**  (Type: CPartnerDeadlineLookUpKey[], Required: No) */
    "lookup_key"?: any[];
    /**  (Type: uint32, Required: No) */
    "accountid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPartnerDismissService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateDismiss(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CDismissPinData[], Required: No) */
    "dismiss_list"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeleteDismiss(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "dismiss_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDismissTimeRange(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /**  (Type: uint32, Required: No) */
    "accountid"?: number;
    /**  (Type: uint32, Required: No) */
    "rtime_after"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPartnerFinancialsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAppWishlistReporting(params?: {
    /** Steamworks Web API                 publisher key                 with Financial permissions. (Type: string, Required: Yes) */
    "key"?: string;
    /** The app being queried for (Type: uint32, Required: Yes) */
    "appid": number;
    /** The date being queried for (GMT bounded). The date should be formatted as                 YYYY-MM-DD, YYYY/MM/DD, or YYYYMMDD. (Type: string, Required: Yes) */
    "date": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetChangedDatesForPartner(params?: {
    /** Steamworks Web API publisher authentication key (Type: string, Required: Yes) */
    "key"?: string;
    /** A unique identifier, the point at which to query data forward from. Should be set to                 0 on first run. (Type: uint64, Required: Yes) */
    "highwatermark": string | number;
    /** Include dates that are visible via view grants in the response (Type: bool, Required: No) */
    "include_view_grants"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDetailedSales(params?: {
    /** Steamworks Web API publisher authentication key (Type: string, Required: Yes) */
    "key"?: string;
    /** Date to retrieve the sales data for. The date should be formatted as YYYY-MM-DD,                 YYYY/MM/DD, or YYYYMMDD. (Type: string, Required: Yes) */
    "date": string;
    /** A per-date value (ie. should be set at 0 for each date being queried). Informs the                 number of new records to query for. (Type: uint64, Required: Yes) */
    "highwatermark_id": string | number;
    /** Include sales data that is visible via view grants in the response (Type: bool, Required: No) */
    "include_view_grants"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPartnerMeetSteamService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  EmailInvitees(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "clan_event_gid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAvailability(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "clan_event_gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBatchPartnerEmailAndName(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "accountids"?: number[];
    /**  (Type: uint32[], Required: No) */
    "partnerids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRegistrations(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "clan_event_gid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSaleEventOrganizers(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "rt_oldest_date"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  TestFireEmails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "clan_event_gid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  UpdateRegistration(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "clan_event_gid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "registration_group_id"?: number;
    /**  (Type: uint32, Required: No) */
    "registration_session_id"?: number;
    /**  (Type: uint32, Required: No) */
    "guest_count"?: number;
    /**  (Type: string, Required: No) */
    "jsondata"?: string;
    /**  (Type: bool, Required: No) */
    "skip_email"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPartnerMembershipInviteService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetInvites(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /** enum (Type: int32[], Required: No) */
    "filter_states"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPartnerStoreBrowseService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCountryRestrictions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreItemID[], Required: No) */
    "ids"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItems(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreItemID, Required: No) */
    "ids"?: any;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /**  (Type: CStoreBrowse_GetItems_Request, Required: No) */
    "request"?: any;
    /**  (Type: bool, Required: No) */
    "include_unpublished"?: boolean;
    /**  (Type: CStoreBrowse_GetItems_Request, Required: No) */
    "getitems_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPhoneService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ConfirmAddPhoneToAccount(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid to use (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Encrypted token (Type: string, Required: No) */
    "stoken"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  IsAccountWaitingForEmailConfirmation(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SendPhoneVerificationCode(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "language"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetAccountPhoneNumber(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** new phone number (Type: string, Required: No) */
    "phone_number"?: string;
    /** country code of origin (Type: string, Required: No) */
    "phone_country_code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  VerifyAccountPhoneWithCode(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** code received from SMS (Type: string, Required: No) */
    "code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPhysicalGoodsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  CheckInventoryAvailableByPackage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: int32, Required: No) */
    "packageid"?: number;
    /**  (Type: string, Required: No) */
    "country_code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPlayerService {
  /**
   * Invites another Steam user to be a friend
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddFriend(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steam ID of user to whom to send a friend invite. (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets the last-played times for the account
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ClientGetLastPlayedTimes(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The most recent last-played time the client already knows about (Type: uint32, Required: No) */
    "min_last_played"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets the achievement completion stats for the specified list of apps.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAchievementsProgress(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /**  (Type: bool, Required: No) */
    "include_unvetted_apps"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets which animated avatar is active for a specific user
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAnimatedAvatar(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets which avatar frame is active for a specific user
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAvatarFrame(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets badges that are owned by a specific user
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBadges(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets all the quests needed to get the specified badge, and which are completed
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCommunityBadgeProgress(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The badge we're asking about (Type: int32, Required: Yes) */
    "badgeid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the player's community preferences
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetCommunityPreferences(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets the badge the user has set as their favorite
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFavoriteBadge(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a list of friends who are playing, have played, own, or want a game
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFriendsGameplayInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a games available achievements for display purposes.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGameAchievements(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Lowercase, language shortnames (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: bool, Required: No) */
    "hash_only"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets which mini profile background is active for a specific user
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMiniProfileBackground(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets the list of nicknames this user has for other users
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetNicknameList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Return a list of games owned by the player
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetOwnedGames(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** true if we want additional details (name, icon) about each game (Type: bool, Required: Yes) */
    "include_appinfo": boolean;
    /** Free games are excluded by default.  If this is set, free games the user has played will be returned. (Type: bool, Required: Yes) */
    "include_played_free_games": boolean;
    /** if set, restricts result set to the passed in apps (Type: uint32, Required: Yes) */
    "appids_filter": number;
    /** Some games are in the free sub, which are excluded by default. (Type: bool, Required: Yes) */
    "include_free_sub": boolean;
    /** if set, skip unvetted store apps (Type: bool, Required: No) */
    "skip_unvetted_apps"?: boolean;
    /** Will return appinfo in this language (Type: string, Required: Yes) */
    "language": string;
    /** true if we want even more details (capsule, sortas, and capabilities) about each game.  include_appinfo must also be true. (Type: bool, Required: Yes) */
    "include_extended_appinfo": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Replacement for WG GetPlayerLinkDetails
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerLinkDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64[], Required: No) */
    "steamids"?: string | number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets which profile background is active for a specific user
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProfileBackground(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the customizations (if any) for a profile
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProfileCustomization(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: bool, Required: No) */
    "include_inactive_customizations"?: boolean;
    /**  (Type: bool, Required: No) */
    "include_purchased_customizations"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the items the user has equipped on their profile
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProfileItemsEquipped(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the items the user can equip on their profile
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProfileItemsOwned(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: ECommunityItemClass, Required: No) */
    "filters"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets themes available for the user.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProfileThemesAvailable(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the purchased and upgraded profile customizations
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPurchasedAndUpgradedProfileCustomizations(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the purchased profile customizations
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPurchasedProfileCustomizations(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetRecentPlaytimeSessionsForChild(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets information about a player's recently played games
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRecentlyPlayedGames(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The number of games to return (0/unset: all) (Type: uint32, Required: Yes) */
    "count": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSingleGamePlaytime(params?: {
    /** Steamworks Web API user authentication key. (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** AppID that we're getting playtime for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets which Steam Deck keyboard skin is active for a specific user
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamDeckKeyboardSkin(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the Steam Level of a user
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamLevel(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns how a given Steam Level compares the user base at large
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamLevelDistribution(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "player_level": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets the best achievements the user has gotten for the specified list of apps.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTopAchievementsForGames(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** The max achievements to load. Max 8 (Type: uint32, Required: No) */
    "max_achievements"?: number;
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserAchievements(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Blocks or unblocks communication with the user.  Despite name, can be a non-friend.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  IgnoreFriend(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** If set, remove from ignore/block list instead of adding (Type: bool, Required: No) */
    "unignore"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Obsolete, partners should use ISteamUser.CheckAppOwnership
   * 
   * Version: 1
   * HTTP Method: GET
   */
  IsPlayingSharedGame(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The player we're asking about (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The game player is currently playing (Type: uint32, Required: Yes) */
    "appid_playing": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Tracks playtime for a user when they are offline
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RecordOfflinePlaytime(params?: {
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: string, Required: Yes) */
    "ticket": string;
    /**  (Type: {message}, Required: Yes) */
    "play_sessions": any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Removes a friend or ignores a friend suggestion
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveFriend(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steam ID of friend to remove. (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets the user's animated avatar for their profile
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetAnimatedAvatar(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "communityitemid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets the user's avatar frame for their profile
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetAvatarFrame(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "communityitemid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets special flags on the equipped item
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetEquippedProfileItemFlags(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "communityitemid"?: string | number;
    /** Set of EProfileItemEquippedFlag (Type: uint32, Required: No) */
    "flags"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets the badge  as the users favorite
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetFavoriteBadge(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "communityitemid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "badgeid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets the user's mini profile background
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetMiniProfileBackground(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "communityitemid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets the user's profile background
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetProfileBackground(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "communityitemid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets profile preferences
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetProfilePreferences(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: ProfilePreferences, Required: No) */
    "profile_preferences"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Selects a theme for the profile
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetProfileTheme(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "theme_id"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets the user's current Steam Deck keyboard skin
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetSteamDeckKeyboardSkin(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "communityitemid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPlaytestService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetInviteHistory(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "limit"?: number;
    /**  (Type: uint32, Required: No) */
    "time_before"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetInviteOptions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetInvites(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "invite_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetUserStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RequestInvite(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateInvites(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64[], Required: No) */
    "invite_ids"?: string | number[];
    /** enum (Type: int32, Required: No) */
    "status"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPortal2Leaderboards_620 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBucketizedData(params?: {
    /** The leaderboard name to fetch data for. (Type: string, Required: Yes) */
    "leaderboardName": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IProductInfoService {
  /**
   * Save and commit rich presence localization for the given app
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SetRichPresenceLocalization(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: {message}, Required: Yes) */
    "languages": any;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPromotionEventInvitesService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AcceptInvite(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "inviteid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "rtdatechosen"?: number;
    /**  (Type: uint32, Required: No) */
    "discount_days"?: number;
    /**  (Type: string, Required: No) */
    "discount_info"?: string;
    /**  (Type: bool, Required: No) */
    "skip_discount_event"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CancelInvite(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "inviteid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetEmailTargets(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "inviteid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetInvite(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** If provided, return only this one (Type: fixed64, Required: No) */
    "inviteid"?: string | number;
    /** if invite is is missing then will return all active invitations for this appid (Type: uint32, Required: No) */
    "appid"?: number;
    /** If provided, will search on packages; must match appid for routing (Type: uint32, Required: No) */
    "packageid"?: number;
    /** If provided, will search on bundles; must match appid for routing (Type: uint32, Required: No) */
    "bundleid"?: number;
    /** To verify the partner admin has access to this partner information (Type: uint32, Required: No) */
    "partnerid"?: number;
    /** Email specific to this promotion planning event (Type: string, Required: No) */
    "promotion_id"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ResendEmailInvite(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Invite we want to re-send (Type: fixed64, Required: No) */
    "inviteid"?: string | number;
    /** We prefer to only notify the users explicitly added, not users with contact permissions on the associated partner ids (Type: bool, Required: No) */
    "only_notify_additional_email"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetInvite(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CPromotionEventInvitation, Required: No) */
    "invite"?: any;
    /** If true, we will fire the email immediately; does not wait on the email to complete (Type: bool, Required: No) */
    "queue_email_to_send"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPromotionPlanningService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreatePlan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CPromotionPlan, Required: No) */
    "plan"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateSalePageForPromo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "clan_account_id"?: number;
    /**  (Type: fixed64, Required: No) */
    "clan_event_gid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "rtime_sale_start"?: number;
    /**  (Type: uint32, Required: No) */
    "rtime_sale_end"?: number;
    /**  (Type: fixed64, Required: No) */
    "daily_deal_gid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "promotion_gid"?: string | number;
    /**  (Type: bool, Required: No) */
    "create_asset_request"?: boolean;
    /**  (Type: uint32, Required: No) */
    "partner_id"?: number;
    /**  (Type: uint32, Required: No) */
    "advertising_appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateTentativePlan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CPromotionPlan, Required: No) */
    "plan"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeletePlan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "promotion_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAdvertisingAppsForPartner(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "partner_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAllActivePlan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAllPlansForApps(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /**  (Type: bool, Required: No) */
    "exclude_sales"?: boolean;
    /**  (Type: bool, Required: No) */
    "exclude_direct_featuring"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAllPlansForPartner(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /**  (Type: uint32, Required: No) */
    "start_date_after_rtime"?: number;
    /**  (Type: uint32, Required: No) */
    "start_date_before_rtime"?: number;
    /**  (Type: bool, Required: No) */
    "show_hidden"?: boolean;
    /**  (Type: uint32, Required: No) */
    "start_date"?: number;
    /**  (Type: uint32, Required: No) */
    "end_date"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "promotion_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlanByAssociationID(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CPromoAssociation[], Required: No) */
    "requested"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlanByInputAccessKey(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "input_access_key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlanCompletedInDateRange(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "oldest_rtime"?: number;
    /**  (Type: uint32, Required: No) */
    "newest_rtime"?: number;
    /**  (Type: string[], Required: No) */
    "promotion_types"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlansUpdatedSince(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "rtime"?: number;
    /**  (Type: uint32, Required: No) */
    "upto_rtime"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPromotionPlanForSalePages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CPromotionPlanning_GetPromotionPlanForSalePages_Request_CSalePage[], Required: No) */
    "request_list"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPromotionPlanSalesDaily(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64[], Required: No) */
    "promotionids"?: string | number[];
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSalePageCandidatesForPromo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "account_id"?: number;
    /**  (Type: bool, Required: No) */
    "include_published"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUpcomingScheduledDiscounts(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "rtstart"?: number;
    /**  (Type: uint32, Required: No) */
    "rtend"?: number;
    /**  (Type: bool, Required: No) */
    "include_packages"?: boolean;
    /**  (Type: bool, Required: No) */
    "filter_modified_sales_rank"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MarkLocalizationAssetComplete(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "promotion_id"?: string | number;
    /**  (Type: bool, Required: No) */
    "value"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SearchPlan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "token"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SendNotification(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "promotion_id"?: string | number;
    /** enum (Type: int32, Required: No) */
    "notification_type"?: number;
    /** If true, then only contact explicitly added emails to the promotion plan (Type: bool, Required: No) */
    "only_explicit_email_addresses"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdatePlan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CPromotionPlan, Required: No) */
    "plan"?: any;
    /**  (Type: fixed64, Required: No) */
    "promotion_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdatePlanInputData(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CPromotionPlan, Required: No) */
    "plan"?: any;
    /**  (Type: fixed64, Required: No) */
    "promotion_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdatePlanPartnerInfo(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CPromotionPlan, Required: No) */
    "plan"?: any;
    /**  (Type: fixed64, Required: No) */
    "promotion_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPromotionStatsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetOptInDemoStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "opt_in_name"?: string;
    /**  (Type: uint32, Required: No) */
    "partner_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPublishedFileModerationService {
  /**
   * Get all the approval requests for the given app (claim status is ignored).
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  GetAllApprovalRequests(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** Return requests for the specified revision. (Type: {enum}, Required: No) */
    "revision"?: any;
    /** The start index of the query. (Type: uint32, Required: No) */
    "start"?: number;
    /** Number of requests to return. (Type: uint32, Required: No) */
    "count"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Process the approval request
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ProcessApprovalRequest(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /**  (Type: {enum}, Required: Yes) */
    "revision": any;
    /**  (Type: uint64, Required: Yes) */
    "change_number": string | number;
    /**  (Type: bool, Required: Yes) */
    "approved": boolean;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPublishedFileService {
  /**
   * Check if the user can subscribe to the published file
   * 
   * Version: 1
   * HTTP Method: GET
   */
  CanSubscribe(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "publishedfileid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Deletes a published file.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  Delete(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Published file id of the file we'd like to delete. (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Retrieves information about a set of published files.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Set of published file Ids to retrieve details for. (Type: uint64[], Required: Yes) */
    "publishedfileids": string | number[];
    /** If true, return tag information in the returned details. (Type: bool, Required: Yes) */
    "includetags": boolean;
    /** If true, return preview information in the returned details. (Type: bool, Required: Yes) */
    "includeadditionalpreviews": boolean;
    /** If true, return children in the returned details. (Type: bool, Required: Yes) */
    "includechildren": boolean;
    /** If true, return key value tags in the returned details. (Type: bool, Required: Yes) */
    "includekvtags": boolean;
    /** If true, return vote data in the returned details. (Type: bool, Required: Yes) */
    "includevotes": boolean;
    /** If true, return a short description instead of the full description. (Type: bool, Required: Yes) */
    "short_description": boolean;
    /** If true, return pricing data, if applicable. (Type: bool, Required: Yes) */
    "includeforsaledata": boolean;
    /** If true, populate the metadata field. (Type: bool, Required: Yes) */
    "includemetadata": boolean;
    /** Specifies the localized text to return. Defaults to English. (Type: ELanguage, Required: No) */
    "language"?: any;
    /** Return playtime stats for the specified number of days before today. (Type: uint32, Required: Yes) */
    "return_playtime_stats": number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** Strips BBCode from descriptions. (Type: bool, Required: Yes) */
    "strip_description_bbcode": boolean;
    /** Return the data for the specified revision. (Type: EPublishedFileRevision, Required: No) */
    "desired_revision"?: any;
    /** If true, then reactions to items will be returned. (Type: bool, Required: No) */
    "includereactions"?: boolean;
    /** Admin tool is doing a query, return hidden items (Type: bool, Required: Yes) */
    "admin_query": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get sub section data (for table of contents, a specific section, or all)
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSubSectionData(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /**  (Type: bool, Required: Yes) */
    "for_table_of_contents": boolean;
    /**  (Type: uint64, Required: Yes) */
    "specific_sectionid": string | number;
    /** Return the data for the specified revision. (Type: {enum}, Required: No) */
    "desired_revision"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Retrieves a count of files published by a user. Uses the same messages as GetUserFiles but totalonly must be true.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserFileCount(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steam ID of the user whose files are being requested. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** App Id of the app that the files were published to. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Shortcut Id to retrieve published files from. (Type: uint32, Required: No) */
    "shortcutid"?: number;
    /** Starting page for results. (Type: uint32, Required: No) */
    "page"?: number;
    /** The number of results, per page to return. (Type: uint32, Required: No) */
    "numperpage"?: number;
    /** Type of files to be returned. (Type: string, Required: No) */
    "type"?: string;
    /** Sorting method to use on returned values. (Type: string, Required: No) */
    "sortmethod"?: string;
    /** Filter by privacy settings. (Type: uint32, Required: No) */
    "privacy"?: number;
    /** Tags that must be present on a published file to satisfy the query. (Type: string, Required: No) */
    "requiredtags"?: string;
    /** Tags that must NOT be present on a published file to satisfy the query. (Type: string, Required: No) */
    "excludedtags"?: string;
    /** Required key-value tags to match on. (Type: {message}, Required: Yes) */
    "required_kv_tags": any;
    /** File type to match files to. (Type: uint32, Required: No) */
    "filetype"?: number;
    /** App Id of the app that published the files, only matched if specified. (Type: uint32, Required: Yes) */
    "creator_appid": number;
    /** Match this cloud filename if specified. (Type: string, Required: Yes) */
    "match_cloud_filename": string;
    /** Allow stale data to be returned for the specified number of seconds. (Type: uint32, Required: No) */
    "cache_max_age_seconds"?: number;
    /** Specifies the localized text to return. Defaults to English. (Type: int32, Required: No) */
    "language"?: number;
    /** At least one of the tags must be present on a published file to satisfy the query. (Type: {message}, Required: No) */
    "taggroups"?: any;
    /** Filter to items created within this range. (Type: {message}, Required: No) */
    "date_range_created"?: any;
    /** Filter to items updated within this range. (Type: {message}, Required: No) */
    "date_range_updated"?: any;
    /** Filter out items that have these content descriptors. (Type: {enum}, Required: No) */
    "excluded_content_descriptors"?: any;
    /** Admin tool is doing a query, return hidden items (Type: bool, Required: Yes) */
    "admin_query": boolean;
    /** If true, only return the total number of files that satisfy this query. (Type: bool, Required: No) */
    "totalonly"?: boolean;
    /** If true, only return the published file ids of files that satisfy this query. (Type: bool, Required: No) */
    "ids_only"?: boolean;
    /** Return vote data (Type: bool, Required: No) */
    "return_vote_data"?: boolean;
    /** Return tags in the file details (Type: bool, Required: Yes) */
    "return_tags": boolean;
    /** Return key-value tags in the file details (Type: bool, Required: No) */
    "return_kv_tags"?: boolean;
    /** Return preview image and video details in the file details (Type: bool, Required: Yes) */
    "return_previews": boolean;
    /** Return child item ids in the file details (Type: bool, Required: Yes) */
    "return_children": boolean;
    /** Populate the short_description field instead of file_description (Type: bool, Required: No) */
    "return_short_description"?: boolean;
    /** Return pricing information, if applicable (Type: bool, Required: Yes) */
    "return_for_sale_data": boolean;
    /** Populate the metadata field (Type: bool, Required: No) */
    "return_metadata"?: boolean;
    /** Return playtime stats for the specified number of days before today. (Type: uint32, Required: Yes) */
    "return_playtime_stats": number;
    /** Strips BBCode from descriptions. (Type: bool, Required: Yes) */
    "strip_description_bbcode": boolean;
    /** If true, then reactions to items will be returned. (Type: bool, Required: No) */
    "return_reactions"?: boolean;
    /** Backwards compatible for the client. (Type: uint32, Required: Yes) */
    "startindex_override": number;
    /** Return the data for the specified revision. (Type: {enum}, Required: No) */
    "desired_revision"?: any;
    /** Return list of apps the items belong to (Type: bool, Required: Yes) */
    "return_apps": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Retrieves files published by a user.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserFiles(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steam ID of the user whose files are being requested. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** App Id of the app that the files were published to. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Shortcut Id to retrieve published files from. (Type: uint32, Required: No) */
    "shortcutid"?: number;
    /** Starting page for results. (Type: uint32, Required: No) */
    "page"?: number;
    /** The number of results, per page to return. (Type: uint32, Required: No) */
    "numperpage"?: number;
    /** Type of files to be returned. (Type: string, Required: No) */
    "type"?: string;
    /** Sorting method to use on returned values. (Type: string, Required: No) */
    "sortmethod"?: string;
    /** Filter by privacy settings. (Type: uint32, Required: No) */
    "privacy"?: number;
    /** Tags that must be present on a published file to satisfy the query. (Type: string, Required: No) */
    "requiredtags"?: string;
    /** Tags that must NOT be present on a published file to satisfy the query. (Type: string, Required: No) */
    "excludedtags"?: string;
    /** Required key-value tags to match on. (Type: {message}, Required: Yes) */
    "required_kv_tags": any;
    /** File type to match files to. (Type: uint32, Required: No) */
    "filetype"?: number;
    /** App Id of the app that published the files, only matched if specified. (Type: uint32, Required: Yes) */
    "creator_appid": number;
    /** Match this cloud filename if specified. (Type: string, Required: Yes) */
    "match_cloud_filename": string;
    /** Allow stale data to be returned for the specified number of seconds. (Type: uint32, Required: No) */
    "cache_max_age_seconds"?: number;
    /** Specifies the localized text to return. Defaults to English. (Type: ELanguage, Required: No) */
    "language"?: any;
    /** At least one of the tags must be present on a published file to satisfy the query. (Type: {message}, Required: No) */
    "taggroups"?: any;
    /** Filter to items created within this range. (Type: {message}, Required: No) */
    "date_range_created"?: any;
    /** Filter to items updated within this range. (Type: {message}, Required: No) */
    "date_range_updated"?: any;
    /** Filter out items that have these content descriptors. (Type: {enum}, Required: No) */
    "excluded_content_descriptors"?: any;
    /** Admin tool is doing a query, return hidden items (Type: bool, Required: Yes) */
    "admin_query": boolean;
    /** If true, only return the total number of files that satisfy this query. (Type: bool, Required: No) */
    "totalonly"?: boolean;
    /** If true, only return the published file ids of files that satisfy this query. (Type: bool, Required: No) */
    "ids_only"?: boolean;
    /** Return vote data (Type: bool, Required: No) */
    "return_vote_data"?: boolean;
    /** Return tags in the file details (Type: bool, Required: Yes) */
    "return_tags": boolean;
    /** Return key-value tags in the file details (Type: bool, Required: No) */
    "return_kv_tags"?: boolean;
    /** Return preview image and video details in the file details (Type: bool, Required: Yes) */
    "return_previews": boolean;
    /** Return child item ids in the file details (Type: bool, Required: Yes) */
    "return_children": boolean;
    /** Populate the short_description field instead of file_description (Type: bool, Required: No) */
    "return_short_description"?: boolean;
    /** Return pricing information, if applicable (Type: bool, Required: Yes) */
    "return_for_sale_data": boolean;
    /** Populate the metadata field (Type: bool, Required: No) */
    "return_metadata"?: boolean;
    /** Return playtime stats for the specified number of days before today. (Type: uint32, Required: Yes) */
    "return_playtime_stats": number;
    /** Strips BBCode from descriptions. (Type: bool, Required: Yes) */
    "strip_description_bbcode": boolean;
    /** If true, then reactions to items will be returned. (Type: bool, Required: No) */
    "return_reactions"?: boolean;
    /** Backwards compatible for the client. (Type: uint32, Required: Yes) */
    "startindex_override": number;
    /** Return the data for the specified revision. (Type: EPublishedFileRevision, Required: No) */
    "desired_revision"?: any;
    /** Return list of apps the items belong to (Type: bool, Required: Yes) */
    "return_apps": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get user vote summary
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserVoteSummary(params?: {
    /**  (Type: uint64[], Required: Yes) */
    "publishedfileids": string | number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Publishes a clouded user file to the Workshop.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  Publish(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** App Id this file is being published FROM. (Type: uint32, Required: No) */
    "appid"?: number;
    /** App Id this file is being published TO. (Type: uint32, Required: No) */
    "consumer_appid"?: number;
    /** Name of the file to publish in the user's cloud. (Type: string, Required: No) */
    "cloudfilename"?: string;
    /** Name of the file to use as the published file's preview. (Type: string, Required: No) */
    "preview_cloudfilename"?: string;
    /** Text title for the published file. (Type: string, Required: No) */
    "title"?: string;
    /** Text description for the published file. (Type: string, Required: No) */
    "file_description"?: string;
    /** (EWorkshopFileType) Type of Workshop file to publish. (Type: uint32, Required: No) */
    "file_type"?: number;
    /** Shortcut name for the published file. (Type: string, Required: No) */
    "consumer_shortcut_name"?: string;
    /** User's YouTube account username. (Type: string, Required: No) */
    "youtube_username"?: string;
    /** Video Id of a YouTube video for this published file. (Type: string, Required: No) */
    "youtube_videoid"?: string;
    /** (ERemoteStoragePublishedFileVisibility) Visibility of the published file (private, friends, public, etc.) (Type: uint32, Required: No) */
    "visibility"?: number;
    /** If supplied, the resulting published file's Id is appended to the URI. (Type: string, Required: No) */
    "redirect_uri"?: string;
    /** Array of text tags to apply to the published file. (Type: string[], Required: No) */
    "tags"?: string[];
    /** Type of collection the published file represents. (Type: string, Required: No) */
    "collection_type"?: string;
    /** Type of game the published file represents. (Type: string, Required: No) */
    "game_type"?: string;
    /** If this represents a game, this is the URL to that game's page. (Type: string, Required: No) */
    "url"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Performs a search query for published files
   * 
   * Version: 1
   * HTTP Method: GET
   */
  QueryFiles(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enumeration EPublishedFileQueryType in clientenums.h (Type: EPublishedFileQueryType, Required: Yes) */
    "query_type": any;
    /** Current page (Type: uint32, Required: Yes) */
    "page": number;
    /** Cursor to paginate through the results (set to '*' for the first request).  Prefer this over using the page parameter, as it will allow you to do deep pagination.  When used, the page parameter will be ignored. (Type: string, Required: Yes) */
    "cursor": string;
    /** The number of results, per page to return. (Type: uint32, Required: No) */
    "numperpage"?: number;
    /** App that created the files (Type: uint32, Required: Yes) */
    "creator_appid": number;
    /** App that consumes the files (Type: uint32, Required: Yes) */
    "appid": number;
    /** Tags to match on. See match_all_tags parameter below (Type: string, Required: Yes) */
    "requiredtags": string;
    /** Tags that must NOT be present on a published file to satisfy the query. (Type: string, Required: No) */
    "excludedtags"?: string;
    /** If true, then items must have all the tags specified, otherwise they must have at least one of the tags. (Type: bool, Required: No) */
    "match_all_tags"?: boolean;
    /** Required flags that must be set on any returned items (Type: string, Required: Yes) */
    "required_flags": string;
    /** Flags that must not be set on any returned items (Type: string, Required: Yes) */
    "omitted_flags": string;
    /** Text to match in the item's title or description (Type: string, Required: Yes) */
    "search_text": string;
    /** EPublishedFileInfoMatchingFileType (Type: uint32, Required: Yes) */
    "filetype": number;
    /** Find all items that reference the given item. (Type: uint64, Required: Yes) */
    "child_publishedfileid": string | number;
    /** If query_type is k_PublishedFileQueryType_RankedByTrend, then this is the number of days to get votes for [1,7]. (Type: uint32, Required: Yes) */
    "days": number;
    /** If query_type is k_PublishedFileQueryType_RankedByTrend, then limit result set just to items that have votes within the day range given (Type: bool, Required: Yes) */
    "include_recent_votes_only": boolean;
    /** Allow stale data to be returned for the specified number of seconds. (Type: uint32, Required: No) */
    "cache_max_age_seconds"?: number;
    /** Language to search in and also what gets returned. Defaults to English. (Type: ELanguage, Required: No) */
    "language"?: any;
    /** Required key-value tags to match on. (Type: {message}, Required: Yes) */
    "required_kv_tags": any;
    /** At least one of the tags must be present on a published file to satisfy the query. (Type: {message}, Required: No) */
    "taggroups"?: any;
    /** Filter to items created within this range. (Type: {message}, Required: No) */
    "date_range_created"?: any;
    /** Filter to items updated within this range. (Type: {message}, Required: No) */
    "date_range_updated"?: any;
    /** Filter out items that have these content descriptors. (Type: {enum}, Required: No) */
    "excluded_content_descriptors"?: any;
    /** Admin tool is doing a query, return hidden items (Type: bool, Required: Yes) */
    "admin_query": boolean;
    /** Additional special filtering (Type: {enum}, Required: Yes) */
    "special_filter": any;
    /** DLC required to use the item (Type: uint32, Required: Yes) */
    "appids_required_for_use": number;
    /** Exclude this DLC required to use the item (Type: uint32, Required: Yes) */
    "excluded_appids_required_for_use": number;
    /** Can be used to search only title or description, instead of both (by default) (Type: {enum}, Required: Yes) */
    "search_text_target": any;
    /** If true, only return the total number of files that satisfy this query. (Type: bool, Required: No) */
    "totalonly"?: boolean;
    /** If true, only return the published file ids of files that satisfy this query. (Type: bool, Required: No) */
    "ids_only"?: boolean;
    /** Return vote data (Type: bool, Required: Yes) */
    "return_vote_data": boolean;
    /** Return tags in the file details (Type: bool, Required: Yes) */
    "return_tags": boolean;
    /** Return key-value tags in the file details (Type: bool, Required: Yes) */
    "return_kv_tags": boolean;
    /** Return preview image and video details in the file details (Type: bool, Required: Yes) */
    "return_previews": boolean;
    /** Return child item ids in the file details (Type: bool, Required: Yes) */
    "return_children": boolean;
    /** Populate the short_description field instead of file_description (Type: bool, Required: Yes) */
    "return_short_description": boolean;
    /** Return pricing information, if applicable (Type: bool, Required: Yes) */
    "return_for_sale_data": boolean;
    /** Populate the metadata (Type: bool, Required: No) */
    "return_metadata"?: boolean;
    /** Return playtime stats for the specified number of days before today. (Type: uint32, Required: Yes) */
    "return_playtime_stats": number;
    /** By default, if none of the other 'return_*' fields are set, only some voting details are returned. Set this to true to return the default set of details. (Type: bool, Required: Yes) */
    "return_details": boolean;
    /** Strips BBCode from descriptions. (Type: bool, Required: Yes) */
    "strip_description_bbcode": boolean;
    /** Return the data for the specified revision. (Type: EPublishedFileRevision, Required: No) */
    "desired_revision"?: any;
    /** If true, then reactions to items will be returned. (Type: bool, Required: No) */
    "return_reactions"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Refresh the voting queue for the user
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RefreshVotingQueue(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** EPublishedFileInfoMatchingFileType (Type: uint32, Required: Yes) */
    "matching_file_type": number;
    /** Include files that have all the tags or any of the tags if match_all_tags is set to false. (Type: string, Required: Yes) */
    "tags": string;
    /** If true, then files must have all the tags specified.  If false, then must have at least one of the tags specified. (Type: bool, Required: No) */
    "match_all_tags"?: boolean;
    /** Exclude any files that have any of these tags. (Type: string, Required: Yes) */
    "excluded_tags": string;
    /** Desired number of items in the voting queue.  May be clamped by the server (Type: uint32, Required: Yes) */
    "desired_queue_size": number;
    /** Filter to items that have data for the specified revision. (Type: EPublishedFileRevision, Required: No) */
    "desired_revision"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets the metadata for a developer on the published file
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SetDeveloperMetadata(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: string, Required: Yes) */
    "metadata": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Subscribes the user to the published file
   * 
   * Version: 1
   * HTTP Method: POST
   */
  Subscribe(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "publishedfileid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "list_type"?: number;
    /**  (Type: int32, Required: No) */
    "appid"?: number;
    /**  (Type: bool, Required: No) */
    "notify_client"?: boolean;
    /**  (Type: bool, Required: No) */
    "include_dependencies"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Unsubscribes the user from the published file
   * 
   * Version: 1
   * HTTP Method: POST
   */
  Unsubscribe(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "publishedfileid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "list_type"?: number;
    /**  (Type: int32, Required: No) */
    "appid"?: number;
    /**  (Type: bool, Required: No) */
    "notify_client"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Updates information about a published file.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  Update(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** App Id this published file belongs to. (Type: uint32, Required: No) */
    "appid"?: number;
    /** Published file id of the file we'd like update. (Type: fixed64, Required: No) */
    "publishedfileid"?: string | number;
    /** Title of the published file. (Type: string, Required: No) */
    "title"?: string;
    /** Description of the published file. (Type: string, Required: No) */
    "file_description"?: string;
    /** Visibility of the published file. (Type: uint32, Required: No) */
    "visibility"?: number;
    /** Set of tags for the published file. (Type: string[], Required: No) */
    "tags"?: string[];
    /** Filename for the published file. (Type: string, Required: No) */
    "filename"?: string;
    /** Preview filename for the published file. (Type: string, Required: No) */
    "preview_filename"?: string;
    /** Whether this published file should have a spoiler tag attached to it. (Type: bool, Required: No) */
    "spoiler_tag"?: boolean;
    /** If this is an image file, you can specify the image width. (Type: uint32, Required: No) */
    "image_width"?: number;
    /** If this is an image file, you can specify the image height. (Type: uint32, Required: No) */
    "image_height"?: number;
    /** If setting title & description, what language to set (Type: int32, Required: No) */
    "language"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Adds/updates/removes a UGC ban in the app
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  UpdateAppUGCBan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint32, Required: Yes) */
    "expiration_time": number;
    /**  (Type: string, Required: Yes) */
    "reason": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Updates the ban status on the item
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  UpdateBanStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: bool, Required: Yes) */
    "banned": boolean;
    /**  (Type: string, Required: Yes) */
    "reason": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Update the incompatible status on the item
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  UpdateIncompatibleStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: bool, Required: Yes) */
    "incompatible": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Updates key/value tags for a published file
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  UpdateKeyValueTags(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /**  (Type: {message}, Required: Yes) */
    "tags_to_add": any;
    /**  (Type: {message}, Required: Yes) */
    "tags_to_remove": any;
    /**  (Type: string, Required: Yes) */
    "string_tags_to_remove_by_key": string;
    /**  (Type: string, Required: Yes) */
    "int_tags_to_remove_by_key": string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Updates tags on the published file
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  UpdateTags(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: string, Required: Yes) */
    "add_tags": string;
    /**  (Type: string, Required: Yes) */
    "remove_tags": string;
    /**  (Type: ELanguage, Required: Yes) */
    "language": any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * User wants to vote on the item
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  Vote(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /**  (Type: bool, Required: Yes) */
    "vote_up": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IPublishingService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreatePartnerAppOptInEmails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** what optin are we creating the email for (Type: string, Required: No) */
    "opt_in_name"?: string;
    /** Who should receive this email (Type: fixed64, Required: No) */
    "targeting_flag"?: string | number;
    /** Settings for firing the email (Type: fixed64, Required: No) */
    "settings_flag"?: string | number;
    /** Custom Email template we should use (Type: string, Required: No) */
    "email_templates"?: string;
    /** Earliest we can send the email, zero means requires manual firing (Type: uint32, Required: No) */
    "start_rtime"?: number;
    /** Stop sending email after this point, zero means requires manual firing (Type: uint32, Required: No) */
    "end_rtime"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetEstimatePartnerAppOptInEmail(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "email_def_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetOptInAppealsSummaryStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string[], Required: No) */
    "opt_in_names"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetOptInEmailTracking(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "email_def_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetOptInHistoryInternal(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "opt_in_name"?: string;
    /**  (Type: uint32, Required: No) */
    "start"?: number;
    /**  (Type: uint32, Required: No) */
    "count"?: number;
    /**  (Type: bool, Required: No) */
    "include_json"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetPartnerAppOptInEmailDefAndStats(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** what optin are we creating the email for (Type: string, Required: No) */
    "opt_in_name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPartnerAppOptInsIDs(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "opt_in_name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPartnerPaidGivenPackageList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "packageids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSinglePartnerAppOptIn(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "opt_in_name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SendPartnerOptInEmailAndWait(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "email_def_id"?: string | number;
    /** This will resend the email to those who were previously marked failed, hoping to unlodge the email (Type: bool, Required: No) */
    "force_resend"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetFeaturingOnPartnerAppOptIn(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /** If true, we want to enable the additional featuring for this app (Type: bool, Required: No) */
    "additional_featuring"?: boolean;
    /**  (Type: string, Required: No) */
    "opt_in_name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  TestFirePartnerAppOptInEmail(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "email_def_id"?: string | number;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /**  (Type: uint32, Required: No) */
    "language_override"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdatePartnerAppOptInEmails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "email_def_id"?: string | number;
    /** Who should receive this email (Type: fixed64, Required: No) */
    "targeting_flag"?: string | number;
    /** Settings for firing the email (Type: fixed64, Required: No) */
    "settings_flag"?: string | number;
    /** Custom Email template we should use (Type: string, Required: No) */
    "email_templates"?: string;
    /** Earliest we can send the email, zero means requires manual firing (Type: uint32, Required: No) */
    "start_rtime"?: number;
    /** Stop sending email after this point, zero means requires manual firing (Type: uint32, Required: No) */
    "end_rtime"?: number;
    /** Indicates we can reviewed the result of the email and deal (Type: bool, Required: No) */
    "reviewed"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IQuestService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ActivateProfileModifierItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint64, Required: No) */
    "communityitemid"?: string | number;
    /**  (Type: bool, Required: No) */
    "activate"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCommunityInventory(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Filter to only community items for these apps. (Type: uint32[], Required: No) */
    "filter_appids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCommunityItemDefinitions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint32, Required: No) */
    "item_type"?: number;
    /** language short name (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: uint64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** when true, json will be returned in item_key_values (Type: bool, Required: No) */
    "keyvalues_as_json"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetNumTradingCardsEarned(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "timestamp_start"?: number;
    /**  (Type: uint32, Required: No) */
    "timestamp_end"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetVirtualItemRewardDefinition(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "eventid"?: number;
    /**  (Type: bool, Required: No) */
    "include_inactive"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Add game items to a user
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  PublisherAddCommunityItemsToPlayer(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint32, Required: Yes) */
    "match_item_type": number;
    /**  (Type: uint32, Required: Yes) */
    "match_item_class": number;
    /**  (Type: string, Required: Yes) */
    "prefix_item_name": string;
    /**  (Type: {message}, Required: Yes) */
    "attributes": any;
    /**  (Type: string, Required: Yes) */
    "note": string;
    /**  (Type: uint64, Required: Yes) */
    "broadcast_channel_id": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetVirtualItemRewardDefinition(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "eventid"?: number;
    /** enum (Type: int32, Required: No) */
    "action"?: number;
    /** Include only item def we are updating or adding. Don't mix adds with updates (Type: CVirtualItemRewardDefinition[], Required: No) */
    "itemsdefs"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IRemoteClientService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  CancelPairing(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  CreateSession(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetReplies(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Register for status updates with a Steam client
   * 
   * Version: 1
   * HTTP Method: POST
   */
  NotifyRegisterStatusUpdate(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "session_id"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "device_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Send a packet to a Steam client
   * 
   * Version: 1
   * HTTP Method: POST
   */
  NotifyRemotePacket(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "session_id"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: bytes, Required: No) */
    "payload"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Unregister for status updates with a Steam client
   * 
   * Version: 1
   * HTTP Method: POST
   */
  NotifyUnregisterStatusUpdate(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "session_id"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SetPairingInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  StartPairing(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISaleFeatureService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAllUserActionDataForType(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "type"?: number;
    /**  (Type: uint32, Required: No) */
    "count"?: number;
    /**  (Type: uint32, Required: No) */
    "last_account_index"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFriendsSharedYearInReview(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Whose friends we are looking (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** The period being queried (Type: uint32, Required: No) */
    "year"?: number;
    /** Valve/Support can also request private ones too (Type: bool, Required: No) */
    "return_private"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMultipleUserActionData(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: fixed64[], Required: No) */
    "gids"?: string | number[];
    /** enum (Type: int32, Required: No) */
    "type"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserActionData(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** That Event GID or Giveaway GID etc... (Type: fixed64, Required: No) */
    "gid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "type"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetUserSharingPermissions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "year"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserYearAchievements(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** The period being queried (Type: uint32, Required: No) */
    "year"?: number;
    /** The apps to filter down to (Type: uint32[], Required: No) */
    "appids"?: number[];
    /** If true, we do not generate the game_achievements fields (Type: bool, Required: No) */
    "total_only"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserYearInReview(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "year"?: number;
    /**  (Type: bool, Required: No) */
    "force_regenerate"?: boolean;
    /** EYearInReviewAccessSource (Type: int32, Required: No) */
    "access_source"?: number;
    /**  (Type: bool, Required: No) */
    "fetch_previous_year_summary"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserYearInReviewShareImage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "year"?: number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserYearScreenshots(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** The period being queried (Type: uint32, Required: No) */
    "year"?: number;
    /** The apps to filter down to (Type: uint32[], Required: No) */
    "appids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetYIRCurrentMonthlySummary(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetUserSharingPermissions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "year"?: number;
    /** enum (Type: int32, Required: No) */
    "privacy_state"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISaleItemRewardsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  CanClaimItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** language short name (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ClaimItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** language short name (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetClaimedSaleRewards(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "sale_def_type"?: number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: bool, Required: No) */
    "include_community_item_def"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCurrentDefinition(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "sale_def_type"?: number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: bool, Required: No) */
    "include_community_item_def"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRewardDefinitions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "virtual_item_reward_event_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetRewardDefinitions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "action"?: number;
    /**  (Type: CSteamItemRewardDefinition[], Required: No) */
    "definitions"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IShoppingCartService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddBundle(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "gidshoppingcart"?: string | number;
    /**  (Type: uint32, Required: No) */
    "bundleid"?: number;
    /**  (Type: uint64, Required: No) */
    "browserid"?: string | number;
    /**  (Type: string, Required: No) */
    "store_country"?: string;
    /**  (Type: uint32, Required: No) */
    "quantity"?: number;
    /**  (Type: bool, Required: No) */
    "beta_mode"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddPackages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "gidshoppingcart"?: string | number;
    /**  (Type: uint64, Required: No) */
    "browserid"?: string | number;
    /**  (Type: string, Required: No) */
    "store_country_code"?: string;
    /**  (Type: bool, Required: No) */
    "beta_mode"?: boolean;
    /**  (Type: CShoppingCart_PackageItem[], Required: No) */
    "cart_items"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateNewShoppingCart(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid_requester"?: string | number;
    /**  (Type: uint64, Required: No) */
    "purchase_request_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetShoppingCartContents(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "gidshoppingcart"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveLineItems(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "gidshoppingcart"?: string | number;
    /**  (Type: uint64[], Required: No) */
    "gidlineitems"?: string | number[];
    /**  (Type: uint64, Required: No) */
    "browserid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdatePackageQuantity(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "gidshoppingcart"?: string | number;
    /**  (Type: uint64, Required: No) */
    "gidlineitem"?: string | number;
    /**  (Type: uint32, Required: No) */
    "quantity"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISiteLicenseService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCurrentClientConnections(params?: {
    /** Steamworks Web API publisher authentication key (Type: string, Required: Yes) */
    "key"?: string;
    /** Site ID to see; zero for all sites (Type: uint64, Required: No) */
    "siteid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTotalPlaytime(params?: {
    /** Steamworks Web API publisher authentication key (Type: string, Required: Yes) */
    "key"?: string;
    /** Report activity starting on or after this time. RFC 3339 UTC format. (Type: string, Required: Yes) */
    "start_time": string;
    /** Report activity starting before this time. RFC 3339 UTC format. (Type: string, Required: Yes) */
    "end_time": string;
    /** Site ID to see; zero for all sites (Type: uint64, Required: No) */
    "siteid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamApps {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetAppBetas(params?: {
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetAppBuilds(params?: {
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** # of builds to retrieve (default 10) (Type: uint32, Required: No) */
    "count"?: number;
    /** True if we want the info on the depots in each build.  False if we don't need that info.  Defaults to true. (Type: bool, Required: No) */
    "depot_details"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetAppDepotVersions(params?: {
    /** AppID of depot (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetCheatingReports(params?: {
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Time range begin (Type: uint32, Required: Yes) */
    "timebegin": number;
    /** Time range end (Type: uint32, Required: Yes) */
    "timeend": number;
    /** include reports that were not bans (Type: bool, Required: Yes) */
    "includereports": boolean;
    /** include reports that were bans (Type: bool, Required: Yes) */
    "includebans": boolean;
    /** minimum report id (Type: uint64, Required: No) */
    "reportidmin"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetPartnerAppListForWebAPIKey(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Filter app results by type. Can be comman separated, eg: games,dlc (Type: string, Required: No) */
    "type_filter"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetPlayersBanned(params?: {
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSDRConfig(params?: {
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetServerList(params?: {
    /** Query filter string (Type: string, Required: No) */
    "filter"?: string;
    /** Limit number of servers in the response (Type: uint32, Required: No) */
    "limit"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServersAtAddress(params?: {
    /** IP or IP:queryport to list (Type: string, Required: Yes) */
    "addr": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SetAppBuildLive(params?: {
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** BuildID (Type: uint32, Required: Yes) */
    "buildid": number;
    /** beta key, required. Use public for default branch (Type: string, Required: Yes) */
    "betakey": string;
    /** SteamID of user approving build change, required for public branches of released apps (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** optional description for this build (Type: string, Required: No) */
    "description"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  UpToDateCheck(params?: {
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** The installed version of the game (Type: uint32, Required: Yes) */
    "version": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  UpdateAppBranchDescription(params?: {
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Beta branch name, required. Will not update default branch (Type: string, Required: Yes) */
    "betakey": string;
    /** Description for this beta branch, required (Type: string, Required: No) */
    "description"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamAwardsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetNominationRecommendations(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "category_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetNominationShareLink(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: bool, Required: No) */
    "generate_new"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserNominations(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  Nominate(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "category_id"?: number;
    /**  (Type: uint32, Required: No) */
    "nominated_id"?: number;
    /**  (Type: string, Required: No) */
    "write_in_name"?: string;
    /**  (Type: uint32, Required: No) */
    "store_appid"?: number;
    /**  (Type: bool, Required: No) */
    "rescind_nomination"?: boolean;
    /** enum (Type: int32, Required: No) */
    "source"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamBitPay {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  BitPayPaymentNotification(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamBoaCompra {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  BoaCompraCheckTransactionStatus(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamBroadcast {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PlayerStats(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ViewerHeartbeat(params?: {
    /** Steam ID of the broadcaster (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Broadcast Session ID (Type: uint64, Required: Yes) */
    "sessionid": string | number;
    /** Viewer token (Type: uint64, Required: Yes) */
    "token": string | number;
    /** video stream representation watching (Type: int32, Required: No) */
    "stream"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamCDN {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetClientFilters(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steam name of CDN property (Type: string, Required: Yes) */
    "cdnname": string;
    /** comma-separated list of allowed IP address blocks in CIDR format - blank for not used (Type: string, Required: No) */
    "allowedipblocks"?: string;
    /** comma-separated list of allowed client network AS numbers - blank for not used (Type: string, Required: No) */
    "allowedasns"?: string;
    /** comma-separated list of allowed client IP country codes in ISO 3166-1 format - blank for not used (Type: string, Required: No) */
    "allowedipcountries"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetPerformanceStats(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steam name of CDN property (Type: string, Required: Yes) */
    "cdnname": string;
    /** Outgoing network traffic in Mbps (Type: uint32, Required: No) */
    "mbps_sent"?: number;
    /** Incoming network traffic in Mbps (Type: uint32, Required: No) */
    "mbps_recv"?: number;
    /** Percent CPU load (Type: uint32, Required: No) */
    "cpu_percent"?: number;
    /** Percent cache hits (Type: uint32, Required: No) */
    "cache_hit_percent"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamChartsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBestOfYearPages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGamesByConcurrentPlayers(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMonthTopAppReleases(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "rtime_month"?: number;
    /**  (Type: bool, Required: No) */
    "include_dlc"?: boolean;
    /**  (Type: uint32, Required: No) */
    "top_results_limit"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMostPlayedGames(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMostPlayedSteamDeckGames(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** enum (Type: int32, Required: No) */
    "top_played_period"?: number;
    /**  (Type: int32, Required: No) */
    "count"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTopReleasesPages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetYearTopAppReleases(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "rtime_year"?: number;
    /**  (Type: bool, Required: No) */
    "include_dlc"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamCloudGaming {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSupportedApps(params?: {
    /** Cloud gaming platform name (Type: string, Required: Yes) */
    "platform": string;
    /** Request extra details if supported (Type: bool, Required: No) */
    "detailed"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamCommunity {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ReportAbuse(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user doing the reporting (Type: uint64, Required: Yes) */
    "steamidActor": string | number;
    /** SteamID of the entity being accused of abuse (Type: uint64, Required: Yes) */
    "steamidTarget": string | number;
    /** AppID to check for ownership (Type: uint32, Required: Yes) */
    "appid": number;
    /** Abuse type code (see EAbuseReportType enum) (Type: uint32, Required: Yes) */
    "abuseType": number;
    /** Content type code (see ECommunityContentType enum) (Type: uint32, Required: Yes) */
    "contentType": number;
    /** Narrative from user (Type: string, Required: Yes) */
    "description": string;
    /** GID of related record (depends on content type) (Type: uint64, Required: No) */
    "gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamDirectory {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCMList(params?: {
    /** Client's Steam cell ID (Type: uint32, Required: Yes) */
    "cellid": number;
    /** Max number of servers to return (Type: uint32, Required: No) */
    "maxcount"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCMListForConnect(params?: {
    /** Client's Steam cell ID, uses IP location if blank (Type: uint32, Required: No) */
    "cellid"?: number;
    /** Optional CM type filter (Type: string, Required: No) */
    "cmtype"?: string;
    /** Optional Steam Realm filter (Type: string, Required: No) */
    "realm"?: string;
    /** Max number of servers to return (Type: uint32, Required: No) */
    "maxcount"?: number;
    /** Desired connection priority (Type: uint32, Required: No) */
    "qoslevel"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamPipeDomains(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamEconomy {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  CanTrade(params?: {
    /** That the key is associated with. Must be a steam economy app. (Type: uint32, Required: Yes) */
    "appid": number;
    /** SteamID of user attempting to initiate a trade (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** SteamID of user that is the target of the trade invitation (Type: uint64, Required: Yes) */
    "targetid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  FinalizeAssetTransaction(params?: {
    /** The app ID the user is buying assets for (Type: uint32, Required: Yes) */
    "appid": number;
    /** SteamID of the user making a purchase (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The transaction ID (Type: string, Required: Yes) */
    "txnid": string;
    /** The local language for the user (Type: string, Required: Yes) */
    "language": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAssetClassInfo(params?: {
    /** Must be a steam economy app. (Type: uint32, Required: Yes) */
    "appid": number;
    /** The user's local language (Type: string, Required: No) */
    "language"?: string;
    /** Number of classes requested. Must be at least one. (Type: uint32, Required: Yes) */
    "class_count": number;
    /** Class ID of the nth class. (Type: uint64, Required: Yes) */
    "classid0": string | number;
    /** Instance ID of the nth class. (Type: uint64, Required: No) */
    "instanceid0"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAssetPrices(params?: {
    /** Must be a steam economy app. (Type: uint32, Required: Yes) */
    "appid": number;
    /** The currency to filter for (Type: string, Required: No) */
    "currency"?: string;
    /** The user's local language (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetExportedAssetsForUser(params?: {
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The app to get exported items from. (Type: uint32, Required: Yes) */
    "appid": number;
    /** The context in the app to get exported items from. (Type: uint64, Required: Yes) */
    "contextid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetMarketPrices(params?: {
    /** Must be a steam economy app. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  StartAssetTransaction(params?: {
    /** The app ID the user is buying assets for (Type: uint32, Required: Yes) */
    "appid": number;
    /** SteamID of user making a purchase (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The ID of the first asset the user is buying - there must be at least one (Type: string, Required: Yes) */
    "assetid0": string;
    /** The quantity of assetid0's the the user is buying (Type: uint32, Required: Yes) */
    "assetquantity0": number;
    /** The local currency for the user (Type: string, Required: Yes) */
    "currency": string;
    /** The local language for the user (Type: string, Required: Yes) */
    "language": string;
    /** The user's IP address (Type: string, Required: Yes) */
    "ipaddress": string;
    /** The referring URL (Type: string, Required: No) */
    "referrer"?: string;
    /** If true (default is false), the authorization will appear in the user's steam client overlay, rather than as a web page - useful for stores that are embedded in products. (Type: bool, Required: No) */
    "clientauth"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  StartTrade(params?: {
    /** That the key is associated with. Must be a steam economy app. (Type: uint32, Required: Yes) */
    "appid": number;
    /** SteamID of first user in the trade (Type: uint64, Required: Yes) */
    "partya": string | number;
    /** SteamID of second user in the trade (Type: uint64, Required: Yes) */
    "partyb": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamEnvoy {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PaymentOutReversalNotification(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamGPTRenderFarmService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateExample(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "problem"?: string;
    /**  (Type: string, Required: No) */
    "label"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "exact_example"?: string;
    /**  (Type: CSteamGPT_CreateExample_Request_SteamGPTLogAddress[], Required: No) */
    "log_addresses"?: any[];
    /**  (Type: string, Required: No) */
    "metadata"?: string;
    /**  (Type: int32, Required: No) */
    "max_timestamp"?: number;
    /**  (Type: uint32, Required: No) */
    "data_version"?: number;
    /**  (Type: string, Required: No) */
    "reevidence_data"?: string;
    /**  (Type: fixed64, Required: No) */
    "parent_row_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "match_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "labeling_task_id"?: string | number;
    /**  (Type: bool, Required: No) */
    "is_test_set"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateLabelingTask(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "movie_url"?: string;
    /**  (Type: string, Required: No) */
    "problem"?: string;
    /**  (Type: string, Required: No) */
    "subproblem"?: string;
    /**  (Type: string, Required: No) */
    "source_type"?: string;
    /**  (Type: string, Required: No) */
    "source_details"?: string;
    /**  (Type: float, Required: No) */
    "movie_start_time_seconds"?: number;
    /**  (Type: float, Required: No) */
    "movie_duration_seconds"?: number;
    /**  (Type: float, Required: No) */
    "movie_target_event_time_seconds"?: number;
    /**  (Type: uint32, Required: No) */
    "game_target_event_tick"?: number;
    /**  (Type: string, Required: No) */
    "evidence"?: string;
    /**  (Type: uint32, Required: No) */
    "evidence_version"?: number;
    /**  (Type: fixed64, Required: No) */
    "matchid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "reevidence_data"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GenerateMetaModelLog(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "log_header"?: string;
    /**  (Type: string[], Required: No) */
    "interval_headers"?: string[];
    /**  (Type: uint32[], Required: No) */
    "interval_logs_count"?: number[];
    /**  (Type: string[], Required: No) */
    "logs_to_inference"?: string[];
    /**  (Type: uint64, Required: No) */
    "upstream_modelid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAvailableTask(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "problem"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint32, Required: No) */
    "data_version"?: number;
    /**  (Type: uint32, Required: No) */
    "task_status"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetTask(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: int64, Required: No) */
    "taskid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  OnTaskUpdate(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "matchid"?: string | number;
    /**  (Type: int64[], Required: No) */
    "subtask_taskids"?: string | number[];
    /**  (Type: uint32, Required: No) */
    "task_status"?: number;
    /**  (Type: int32, Required: No) */
    "process_return_code"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamGPTService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateExample(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "problem"?: string;
    /**  (Type: string, Required: No) */
    "label"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "exact_example"?: string;
    /**  (Type: CSteamGPT_CreateExample_Request_SteamGPTLogAddress[], Required: No) */
    "log_addresses"?: any[];
    /**  (Type: string, Required: No) */
    "metadata"?: string;
    /**  (Type: int32, Required: No) */
    "max_timestamp"?: number;
    /**  (Type: uint32, Required: No) */
    "data_version"?: number;
    /**  (Type: string, Required: No) */
    "reevidence_data"?: string;
    /**  (Type: fixed64, Required: No) */
    "parent_row_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "match_id"?: string | number;
    /**  (Type: uint64, Required: No) */
    "labeling_task_id"?: string | number;
    /**  (Type: bool, Required: No) */
    "is_test_set"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateTask(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "problem"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "matchid"?: string | number;
    /**  (Type: int32, Required: No) */
    "delay_seconds"?: number;
    /**  (Type: uint32, Required: No) */
    "task_type"?: number;
    /**  (Type: string, Required: No) */
    "evaluation_evidence_log"?: string;
    /**  (Type: CSteamGPT_TaskDetails, Required: No) */
    "task_details"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAvailableTaskSourceDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "problem"?: string;
    /**  (Type: string, Required: No) */
    "subproblem"?: string;
    /**  (Type: string, Required: No) */
    "source_type"?: string;
    /**  (Type: uint32, Required: No) */
    "max_results"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetExamplesForFineTuning(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "problem"?: string;
    /**  (Type: string, Required: No) */
    "label"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: int32, Required: No) */
    "page_size"?: number;
    /**  (Type: int32, Required: No) */
    "page_num"?: number;
    /**  (Type: int32, Required: No) */
    "example_size_softmax"?: number;
    /**  (Type: int32, Required: No) */
    "versionid"?: number;
    /**  (Type: uint32, Required: No) */
    "start_time"?: number;
    /**  (Type: int32, Required: No) */
    "seed"?: number;
    /**  (Type: uint64, Required: No) */
    "upstream_modelid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetExamplesFromTestSet(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint64, Required: No) */
    "start_index"?: string | number;
    /**  (Type: uint32, Required: No) */
    "max_results"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetLabelingTasks(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "problem"?: string;
    /**  (Type: string, Required: No) */
    "subproblem"?: string;
    /**  (Type: string, Required: No) */
    "source_type"?: string;
    /**  (Type: string, Required: No) */
    "source_details"?: string;
    /**  (Type: uint64, Required: No) */
    "labeler_steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "player_steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "matchid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "taskid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "maxresults"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetNextLabelingTask(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "problem"?: string;
    /**  (Type: string, Required: No) */
    "subproblem"?: string;
    /**  (Type: string, Required: No) */
    "source_type"?: string;
    /**  (Type: string, Required: No) */
    "source_details"?: string;
    /**  (Type: fixed64, Required: No) */
    "labeler_steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "max_age_days"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetTestSetInferenceResults(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string[], Required: No) */
    "problems"?: string[];
    /**  (Type: string[], Required: No) */
    "labels"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SubmitLabel(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint64, Required: No) */
    "labeler_steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "labeling_taskid"?: string | number;
    /**  (Type: string, Required: No) */
    "metadata"?: string;
    /**  (Type: string[], Required: No) */
    "labels"?: string[];
    /**  (Type: bool, Required: No) */
    "is_test_set"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamGameServerStats {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetGameServerPlayerStatsForGame(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** game id to get stats for, if not a mod, it's safe to use appid here (Type: uint64, Required: Yes) */
    "gameid": string | number;
    /** appID of the game (Type: uint32, Required: Yes) */
    "appid": number;
    /** range start date/time (Format: YYYY-MM-DD HH:MM:SS, seattle local time (Type: string, Required: Yes) */
    "rangestart": string;
    /** range end date/time (Format: YYYY-MM-DD HH:MM:SS, seattle local time (Type: string, Required: Yes) */
    "rangeend": string;
    /** Max number of results to return (up to 1000) (Type: uint32, Required: No) */
    "maxresults"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamLeaderboards {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  DeleteLeaderboard(params?: {
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** name of the leaderboard to delete (Type: string, Required: Yes) */
    "name": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  DeleteLeaderboardScore(params?: {
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** numeric ID of the target leaderboard. Can be retrieved from GetLeaderboardsForGame (Type: uint64, Required: Yes) */
    "leaderboardid": string | number;
    /** steamID to set the score for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  FindOrCreateLeaderboard(params?: {
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** name of the leaderboard to create (Type: string, Required: Yes) */
    "name": string;
    /** sort method to use for this leaderboard (defaults to Ascending) (Type: string, Required: No) */
    "sortmethod"?: string;
    /** display type for this leaderboard (defaults to Numeric) (Type: string, Required: No) */
    "displaytype"?: string;
    /** if this is true the leaderboard will be created if it doesn't exist. Defaults to true. (Type: bool, Required: No) */
    "createifnotfound"?: boolean;
    /** if this is true the leaderboard scores cannot be set by clients, and can only be set by publisher via SetLeaderboardScore WebAPI. Defaults to false. (Type: bool, Required: No) */
    "onlytrustedwrites"?: boolean;
    /** if this is true the leaderboard scores can only be read for friends by clients, scores can always be read by publisher. Defaults to false. (Type: bool, Required: No) */
    "onlyfriendsreads"?: boolean;
    /** if this is true the leaderboard scores for SteamIDs can only be read for party members, scores can always be read by publisher. Defaults to false. (Type: bool, Required: No) */
    "onlyusersinsameparty"?: boolean;
    /** limit the range of rows around user. Zero means unlimited. -1 means disabled. Positive is plus/minus limit. Defaults to zero. (Type: int32, Required: No) */
    "limitrangearounduser"?: number;
    /** limit the top of the leaderboard. Zero means unlimited. -1 means disabled. Positive is limit to TOP(N). Defaults to zero. (Type: int32, Required: No) */
    "limitglobaltopentries"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetLeaderboardEntries(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** range start or 0 (Type: int32, Required: Yes) */
    "rangestart": number;
    /** range end or max LB entries (Type: int32, Required: Yes) */
    "rangeend": number;
    /** SteamID used for friend & around user requests (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** ID of the leaderboard to view (Type: int32, Required: Yes) */
    "leaderboardid": number;
    /** type of request: RequestGlobal, RequestAroundUser, RequestFriends (Type: uint32, Required: Yes) */
    "datarequest": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetLeaderboardsForGame(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ModifyLeaderboardScoreMulti(params?: {
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** steamID to set the score for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** the score to set for this user (Type: int32, Required: No) */
    "score"?: number;
    /** update method to use. Can be "KeepBest" or "ForceUpdate" (Type: string, Required: No) */
    "scoremethod"?: string;
    /** game-specific details for how the score was earned. Up to 256 bytes. (Type: rawbinary, Required: No) */
    "details"?: any;
    /** Numeric ID of the target leaderboard to delete user scores from. Multiple leaderboards supported by numbering sequentially [0], [1], [2], ... Leaderboards be retrieved from GetLeaderboardsForGame. (Type: uint32[], Required: No) */
    "leaderboardid_del"?: number[];
    /** Numeric ID of the target leaderboard to delete user scores from. Multiple leaderboards supported by numbering sequentially [0], [1], [2], ... Leaderboards be retrieved from GetLeaderboardsForGame. (Type: uint32, Required: No) */
    "leaderboardid_del[1]"?: number;
    /** Numeric ID of the target leaderboard to set user scores into. Multiple leaderboards supported by numbering sequentially [0], [1], [2], ... Scores are set after all delete operations complete. Leaderboards be retrieved from GetLeaderboardsForGame. (Type: uint32[], Required: No) */
    "leaderboardid_set"?: number[];
    /** Numeric ID of the target leaderboard to set user scores into. Multiple leaderboards supported by numbering sequentially [0], [1], [2], ... Scores are set after all delete operations complete. Leaderboards be retrieved from GetLeaderboardsForGame. (Type: uint32, Required: No) */
    "leaderboardid_set[1]"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ResetLeaderboard(params?: {
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** numeric ID of the target leaderboard. Can be retrieved from GetLeaderboardsForGame (Type: uint32, Required: Yes) */
    "leaderboardid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SetLeaderboardScore(params?: {
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** numeric ID of the target leaderboard. Can be retrieved from GetLeaderboardsForGame (Type: uint32, Required: Yes) */
    "leaderboardid": number;
    /** steamID to set the score for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** the score to set for this user (Type: int32, Required: Yes) */
    "score": number;
    /** update method to use. Can be "KeepBest" or "ForceUpdate" (Type: string, Required: Yes) */
    "scoremethod": string;
    /** game-specific details for how the score was earned. Up to 256 bytes. (Type: rawbinary, Required: No) */
    "details"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamLearnService {
  /**
   * Batches multiple data updates, snapshots, and inference requests into a single call
   * 
   * Version: 1
   * HTTP Method: POST
   */
  BatchOperation(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CMsgSteamLearn_SnapshotProject_Request, Required: No) */
    "snapshot_requests"?: any;
    /**  (Type: CMsgSteamLearn_Inference_Request, Required: No) */
    "inference_requests"?: any;
    /**  (Type: CMsgSteamLearn_CacheData_Request[], Required: No) */
    "cache_data_requests"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Updates a cached data entry.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CacheData(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "access_token"?: string;
    /**  (Type: CMsgSteamLearn_AccessData, Required: No) */
    "access_data"?: any;
    /**  (Type: CMsgSteamLearnData, Required: No) */
    "data"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateProject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "project_name"?: string;
    /**  (Type: string, Required: No) */
    "project_description"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  EditProject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CMsgSteamLearnProject, Required: No) */
    "project"?: any;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  EditProjectConfig(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CMsgSteamLearnProjectConfig, Required: No) */
    "project_config"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets the access tokens needed for registering data sources, submitting data to them, and snapshotting projects
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAccessTokens(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAccessTokensWeb(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBatchedStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CMsgSteamLearn_GetFetchStatus_Request[], Required: No) */
    "fetch_requests"?: any[];
    /**  (Type: CMsgSteamLearn_GetTrainStatus_Request[], Required: No) */
    "train_requests"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDataSource(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "data_source_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetEmbeddingValues(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /**  (Type: uint32, Required: No) */
    "train_id"?: number;
    /**  (Type: string, Required: No) */
    "export_name"?: string;
    /**  (Type: uint32[], Required: No) */
    "numerical_values"?: number[];
    /**  (Type: uint32, Required: No) */
    "fetch_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFetchStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "fetch_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFetchStatusVersions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLogEvents(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "look_behind_days"?: number;
    /**  (Type: uint32, Required: No) */
    "look_ahead_days"?: number;
    /**  (Type: uint32, Required: No) */
    "start_timestamp"?: number;
    /**  (Type: uint32, Required: No) */
    "end_timestamp"?: number;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetNearestEmbedding(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /**  (Type: uint32, Required: No) */
    "train_id"?: number;
    /**  (Type: string, Required: No) */
    "export_name"?: string;
    /**  (Type: uint32, Required: No) */
    "result_count"?: number;
    /**  (Type: float[], Required: No) */
    "values"?: number[];
    /**  (Type: uint32, Required: No) */
    "fetch_id"?: number;
    /**  (Type: uint32, Required: No) */
    "popularity_weight"?: number;
    /**  (Type: uint32, Required: No) */
    "focus_weight"?: number;
    /**  (Type: uint32[], Required: No) */
    "scope_items"?: number[];
    /**  (Type: uint32, Required: No) */
    "scope_range"?: number;
    /**  (Type: uint32, Required: No) */
    "scope_decay_range"?: number;
    /**  (Type: uint32, Required: No) */
    "scope_decay_strength"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProjectConfig(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetProjectStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CMsgSteamLearn_ProjectStatus_Request_RequestAll, Required: No) */
    "request_all"?: any;
    /**  (Type: CMsgSteamLearn_ProjectStatus_Request_RequestSpecific, Required: No) */
    "request_specific"?: any;
    /**  (Type: CMsgSteamLearn_ProjectStatus_Request_RequestTrain, Required: No) */
    "request_train"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSnapshotStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /**  (Type: uint32, Required: No) */
    "snapshot_example_count"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTrainLogs(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "fetch_id"?: number;
    /**  (Type: uint32, Required: No) */
    "train_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTrainStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "train_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTrainStatusVersions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Inferences using supplied data, or data associated with the specified key.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  Inference(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "access_token"?: string;
    /**  (Type: CMsgSteamLearn_AccessData, Required: No) */
    "access_data"?: any;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /**  (Type: uint32, Required: No) */
    "override_train_id"?: number;
    /**  (Type: CMsgSteamLearnDataList, Required: No) */
    "data"?: any;
    /**  (Type: float[], Required: No) */
    "additional_data"?: number[];
    /**  (Type: uint64[], Required: No) */
    "keys"?: string | number[];
    /**  (Type: string, Required: No) */
    "named_inference"?: string;
    /**  (Type: uint32, Required: No) */
    "inference_iterations"?: number;
    /**  (Type: uint32[], Required: No) */
    "weighted_items"?: number[];
    /**  (Type: float[], Required: No) */
    "item_weights"?: number[];
    /**  (Type: CMsgInferenceIterateBeamSearch, Required: No) */
    "iterate_beam_search"?: any;
    /**  (Type: uint32, Required: No) */
    "debug_spew"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  InferenceBackend(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "fetch_id"?: number;
    /**  (Type: uint32, Required: No) */
    "train_id"?: number;
    /**  (Type: uint32[], Required: No) */
    "additional_data"?: number[];
    /**  (Type: uint64[], Required: No) */
    "keys"?: string | number[];
    /**  (Type: CMsgSteamLearnRawDataElement[], Required: No) */
    "data"?: any[];
    /**  (Type: string, Required: No) */
    "named_inference"?: string;
    /**  (Type: uint32, Required: No) */
    "inference_iterations"?: number;
    /**  (Type: uint32[], Required: No) */
    "weighted_items"?: number[];
    /**  (Type: float[], Required: No) */
    "item_weights"?: number[];
    /**  (Type: CMsgInferenceIterateBeamSearch, Required: No) */
    "iterate_beam_search"?: any;
    /**  (Type: uint32, Required: No) */
    "debug_spew"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Requests the metadata that was generated from a specified fetch.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  InferenceMetadata(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "access_token"?: string;
    /**  (Type: CMsgSteamLearn_AccessData, Required: No) */
    "access_data"?: any;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /**  (Type: uint32, Required: No) */
    "override_train_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ListDataSources(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ListProjectConfigs(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ListProjects(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PublishProject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Registers a data desc (or finds a data desc if it's already registered).
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RegisterDataSource(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "access_token"?: string;
    /**  (Type: CMsgSteamLearn_AccessData, Required: No) */
    "access_data"?: any;
    /**  (Type: CMsgSteamLearnDataSource, Required: No) */
    "data_source"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SetTrainLive(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /**  (Type: uint32, Required: No) */
    "train_id"?: number;
    /**  (Type: bool, Required: No) */
    "from_scheduled"?: boolean;
    /**  (Type: bool, Required: No) */
    "deactivate"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Snapshots the current data for a project.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SnapshotProject(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "access_token"?: string;
    /**  (Type: CMsgSteamLearn_AccessData, Required: No) */
    "access_data"?: any;
    /**  (Type: uint32, Required: No) */
    "project_id"?: number;
    /**  (Type: uint32, Required: No) */
    "published_version"?: number;
    /**  (Type: uint64[], Required: No) */
    "keys"?: string | number[];
    /**  (Type: CMsgSteamLearnData, Required: No) */
    "data"?: any;
    /**  (Type: uint32, Required: No) */
    "pending_data_limit_seconds"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  Train(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CMsgSteamLearnProjectConfig, Required: No) */
    "project_config"?: any;
    /**  (Type: CMsgSteamLearn_Train_Request_Fetch, Required: No) */
    "fetch"?: any;
    /**  (Type: CMsgSteamLearn_Train_Request_Train, Required: No) */
    "train"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamMLService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  FullAccountUpdate(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64[], Required: No) */
    "steamids"?: string | number[];
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /** enum (Type: int32, Required: No) */
    "problem"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetLogContentsForTraining(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "name"?: string;
    /**  (Type: int32, Required: No) */
    "lane"?: number;
    /**  (Type: int32, Required: No) */
    "stride"?: number;
    /**  (Type: int32, Required: No) */
    "salt"?: number;
    /**  (Type: int32, Required: No) */
    "goal_examples"?: number;
    /**  (Type: float, Required: No) */
    "train_pcg"?: number;
    /**  (Type: bool, Required: No) */
    "train_accept"?: boolean;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "channel"?: string;
    /**  (Type: bool, Required: No) */
    "restart"?: boolean;
    /**  (Type: bool, Required: No) */
    "count_lines_as_examples"?: boolean;
    /**  (Type: bool, Required: No) */
    "retry"?: boolean;
    /**  (Type: int32, Required: No) */
    "version"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PartialAccountUpdate(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64[], Required: No) */
    "steamids"?: string | number[];
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /** enum (Type: int32[], Required: No) */
    "schema_updates"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamMicroTxn {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  AddToCart(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  AdjustAgreement(params?: {
    /** SteamID of user with the agreement (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** ID of agreement (Type: uint64, Required: Yes) */
    "agreementid": string | number;
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Date for next process (Type: string, Required: Yes) */
    "nextprocessdate": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  CancelAgreement(params?: {
    /** SteamID of user with the agreement (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** ID of agreement (Type: uint64, Required: Yes) */
    "agreementid": string | number;
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  CreateCart(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  FinalizeTxn(params?: {
    /** 3rd party ID for transaction (Type: uint64, Required: Yes) */
    "orderid": string | number;
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCartContents(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 5
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetReport(params?: {
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Report type (GAMESALES, STEAMSTORE, SETTLEMENT) (Type: string, Required: No) */
    "type"?: string;
    /** Beginning time to start report from (RFC 3339 UTC format) (Type: string, Required: Yes) */
    "time": string;
    /** Max number of results to return (up to 1000) (Type: uint32, Required: No) */
    "maxresults"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetUserAgreementInfo(params?: {
    /** SteamID of user making purchase (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetUserInfo(params?: {
    /** SteamID of user making purchase (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** ip address of user in string format (xxx.xxx.xxx.xxx). Only required if usersession=web (Type: string, Required: No) */
    "ipaddress"?: string;
    /** AppID of game this transaction is for (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 3
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  InitTxn(params?: {
    /** 3rd party ID for transaction (Type: uint64, Required: Yes) */
    "orderid": string | number;
    /** SteamID of user making purchase (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Number of items in cart (Type: uint32, Required: Yes) */
    "itemcount": number;
    /** ISO 639-1 language code of description (Type: string, Required: Yes) */
    "language": string;
    /** ISO 4217 currency code (Type: string, Required: Yes) */
    "currency": string;
    /** session where user will authorize the transaction. client or web (defaults to client) (Type: string, Required: No) */
    "usersession"?: string;
    /** ip address of user in string format (xxx.xxx.xxx.xxx). Only required if usersession=web (Type: string, Required: No) */
    "ipaddress"?: string;
    /** 3rd party ID for item (Type: uint32[], Required: Yes) */
    "itemid": number[];
    /** Quantity of this item (Type: uint32[], Required: Yes) */
    "qty": number[];
    /** Total cost (in cents) of item(s) (Type: int32[], Required: Yes) */
    "amount": number[];
    /** Description of item (Type: string[], Required: Yes) */
    "description": string[];
    /** Optional category grouping for item (Type: string[], Required: No) */
    "category"?: string[];
    /** Optional bundleid of associated bundle (Type: uint32[], Required: No) */
    "associated_bundle"?: number[];
    /** Optional recurring billing type (Type: string[], Required: No) */
    "billingtype"?: string[];
    /** Optional start date for recurring billing (Type: string[], Required: No) */
    "startdate"?: string[];
    /** Optional end date for recurring billing (Type: string[], Required: No) */
    "enddate"?: string[];
    /** Optional period for recurring billing (Type: string[], Required: No) */
    "period"?: string[];
    /** Optional frequency for recurring billing (Type: uint32[], Required: No) */
    "frequency"?: number[];
    /** Optional recurring billing amount (Type: string[], Required: No) */
    "recurringamt"?: string[];
    /** Number of bundles in cart (Type: uint32, Required: No) */
    "bundlecount"?: number;
    /** 3rd party ID of the bundle. This shares the same ID space as 3rd party items. (Type: uint32[], Required: No) */
    "bundleid"?: number[];
    /** Quantity of this bundle (Type: uint32[], Required: No) */
    "bundle_qty"?: number[];
    /** Description of bundle (Type: string[], Required: No) */
    "bundle_desc"?: string[];
    /** Optional category grouping for bundle (Type: string[], Required: No) */
    "bundle_category"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  IsValidCart(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ProcessAgreement(params?: {
    /** 3rd party ID for transaction (Type: uint64, Required: Yes) */
    "orderid": string | number;
    /** SteamID of user with the agreement (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** ID of agreement (Type: uint64, Required: Yes) */
    "agreementid": string | number;
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Total cost (in cents) to charge (Type: int32, Required: Yes) */
    "amount": number;
    /** ISO 4217 currency code (Type: string, Required: Yes) */
    "currency": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 3
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  QueryTxn(params?: {
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** 3rd party ID for transaction (Type: uint64, Required: No) */
    "orderid"?: string | number;
    /** Steam transaction ID (Type: uint64, Required: No) */
    "transid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RefundTxn(params?: {
    /** 3rd party ID for transaction (Type: uint64, Required: Yes) */
    "orderid": string | number;
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamMicroTxnSandbox {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  AdjustAgreement(params?: {
    /** SteamID of user with the agreement (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** ID of agreement (Type: uint64, Required: Yes) */
    "agreementid": string | number;
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Date for next process (Type: string, Required: Yes) */
    "nextprocessdate": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  CancelAgreement(params?: {
    /** SteamID of user with the agreement (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** ID of agreement (Type: uint64, Required: Yes) */
    "agreementid": string | number;
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  FinalizeTxn(params?: {
    /** 3rd party ID for transaction (Type: uint64, Required: Yes) */
    "orderid": string | number;
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 5
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetReport(params?: {
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Report type (GAMESALES, STEAMSTORE, SETTLEMENT) (Type: string, Required: No) */
    "type"?: string;
    /** Beginning time to start report from (RFC 3339 UTC format) (Type: string, Required: Yes) */
    "time": string;
    /** Max number of results to return (up to 1000) (Type: uint32, Required: No) */
    "maxresults"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetUserAgreementInfo(params?: {
    /** SteamID of user making purchase (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetUserInfo(params?: {
    /** SteamID of user making purchase (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** ip address of user in string format (xxx.xxx.xxx.xxx). Only required if usersession=web (Type: string, Required: No) */
    "ipaddress"?: string;
    /** AppID of game this transaction is for (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 3
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  InitTxn(params?: {
    /** 3rd party ID for transaction (Type: uint64, Required: Yes) */
    "orderid": string | number;
    /** SteamID of user making purchase (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Number of items in cart (Type: uint32, Required: Yes) */
    "itemcount": number;
    /** ISO 639-1 language code of description (Type: string, Required: Yes) */
    "language": string;
    /** ISO 4217 currency code (Type: string, Required: Yes) */
    "currency": string;
    /** 3rd party ID for item (Type: uint32[], Required: Yes) */
    "itemid": number[];
    /** Quantity of this item (Type: uint32[], Required: Yes) */
    "qty": number[];
    /** Total cost (in cents) of item(s) (Type: int32[], Required: Yes) */
    "amount": number[];
    /** Description of item (Type: string[], Required: Yes) */
    "description": string[];
    /** Optional category grouping for item (Type: string[], Required: No) */
    "category"?: string[];
    /** Optional recurring billing type (Type: string[], Required: No) */
    "billingtype"?: string[];
    /** Optional start date for recurring billing (Type: string[], Required: No) */
    "startdate"?: string[];
    /** Optional end date for recurring billing (Type: string[], Required: No) */
    "enddate"?: string[];
    /** Optional period for recurring billing (Type: string[], Required: No) */
    "period"?: string[];
    /** Optional frequency for recurring billing (Type: uint32[], Required: No) */
    "frequency"?: number[];
    /** Optional recurring billing amount (Type: string[], Required: No) */
    "recurringamt"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ProcessAgreement(params?: {
    /** SteamID of user with the agreement (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** ID of agreement (Type: uint64, Required: Yes) */
    "agreementid": string | number;
    /** AppID of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Total cost (in cents) to charge (Type: int32, Required: Yes) */
    "amount": number;
    /** ISO 4217 currency code (Type: string, Required: Yes) */
    "currency": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 3
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  QueryTxn(params?: {
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** 3rd party ID for transaction (Type: uint64, Required: No) */
    "orderid"?: string | number;
    /** Steam transaction ID (Type: uint64, Required: No) */
    "transid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RefundTxn(params?: {
    /** 3rd party ID for transaction (Type: uint64, Required: Yes) */
    "orderid": string | number;
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamNews {
  /**
   * 
   * Version: 2
   * HTTP Method: GET
   */
  GetNewsForApp(params?: {
    /** AppID to retrieve news for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit. (Type: uint32, Required: No) */
    "maxlength"?: number;
    /** Retrieve posts earlier than this date (unix epoch timestamp) (Type: uint32, Required: No) */
    "enddate"?: number;
    /** # of posts to retrieve (default 20) (Type: uint32, Required: No) */
    "count"?: number;
    /** Comma-separated list of feed names to return news for (Type: string, Required: No) */
    "feeds"?: string;
    /** Comma-separated list of tags to filter by (e.g. 'patchnodes') (Type: string, Required: No) */
    "tags"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetNewsForAppAuthed(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** AppID to retrieve news for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit. (Type: uint32, Required: No) */
    "maxlength"?: number;
    /** Retrieve posts earlier than this date (unix epoch timestamp) (Type: uint32, Required: No) */
    "enddate"?: number;
    /** # of posts to retrieve (default 20) (Type: uint32, Required: No) */
    "count"?: number;
    /** Comma-seperated list of feed names to return news for (Type: string, Required: No) */
    "feeds"?: string;
    /** Comma-separated list of tags to filter by (e.g. 'patchnodes') (Type: string, Required: No) */
    "tags"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamNodwin {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  NodwinPaymentNotification(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamNotificationService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPreferences(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamNotifications(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Whether to include notifications the user has hidden previously (Type: bool, Required: No) */
    "include_hidden"?: boolean;
    /** What language to get notifications in, for the general type that is pre-localized on the server, default english (Type: int32, Required: No) */
    "language"?: number;
    /** Whether to include counts of pending confirmations (Type: bool, Required: No) */
    "include_confirmation_count"?: boolean;
    /** Whether to include counts of unclaimed gifts or pending friend requests (Type: bool, Required: No) */
    "include_pinned_counts"?: boolean;
    /** Whether to include read notifications (Type: bool, Required: No) */
    "include_read"?: boolean;
    /** Whether to return only the count of unread notifications (Type: bool, Required: No) */
    "count_only"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  HideNotification(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64[], Required: No) */
    "notification_ids"?: string | number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MarkNotificationsRead(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** If set, marks ALL notifications older than this timestamp read (Type: uint32, Required: No) */
    "timestamp"?: number;
    /** If set, marks only notifications of a specific type read (Type: int32, Required: No) */
    "notification_type"?: number;
    /** If set, only the specified notification will be marked read (Type: uint64[], Required: No) */
    "notification_ids"?: string | number[];
    /** Mark all of the user's notifications as read (Type: bool, Required: No) */
    "mark_all_read"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MarkNotificationsViewed(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: No) */
    "remote_client_id"?: string | number;
    /**  (Type: uint32, Required: No) */
    "target_client_type"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetPreferences(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: SteamNotificationPreference[], Required: No) */
    "preferences"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamPayPalPaymentsHub {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  PayPalPaymentsHubPaymentNotification(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamPublishedItemSearch {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RankedByPublicationOrder(params?: {
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** appID of product (Type: uint32, Required: Yes) */
    "appid": number;
    /** Starting index in the result set (0 based) (Type: uint32, Required: Yes) */
    "startidx": number;
    /** Number Requested (Type: uint32, Required: Yes) */
    "count": number;
    /** Number of Tags Specified (Type: uint32, Required: Yes) */
    "tagcount": number;
    /** Number of User specific tags requested (Type: uint32, Required: Yes) */
    "usertagcount": number;
    /** Whether the user making the request is an admin for the app and can see private files (Type: bool, Required: No) */
    "hasappadminaccess"?: boolean;
    /** EPublishedFileInfoMatchingFileType, defaults to k_PFI_MatchingFileType_Items (Type: uint32, Required: No) */
    "fileType"?: number;
    /** Tag to filter result set (Type: string[], Required: No) */
    "tag"?: string[];
    /** A user specific tag (Type: string[], Required: No) */
    "usertag"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RankedByTrend(params?: {
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** appID of product (Type: uint32, Required: Yes) */
    "appid": number;
    /** Starting index in the result set (0 based) (Type: uint32, Required: Yes) */
    "startidx": number;
    /** Number Requested (Type: uint32, Required: Yes) */
    "count": number;
    /** Number of Tags Specified (Type: uint32, Required: Yes) */
    "tagcount": number;
    /** Number of User specific tags requested (Type: uint32, Required: Yes) */
    "usertagcount": number;
    /** Whether the user making the request is an admin for the app and can see private files (Type: bool, Required: No) */
    "hasappadminaccess"?: boolean;
    /** EPublishedFileInfoMatchingFileType, defaults to k_PFI_MatchingFileType_Items (Type: uint32, Required: No) */
    "fileType"?: number;
    /** [1,7] number of days for the trend period, including today (Type: uint32, Required: No) */
    "days"?: number;
    /** Tag to filter result set (Type: string[], Required: No) */
    "tag"?: string[];
    /** A user specific tag (Type: string[], Required: No) */
    "usertag"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RankedByVote(params?: {
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** appID of product (Type: uint32, Required: Yes) */
    "appid": number;
    /** Starting index in the result set (0 based) (Type: uint32, Required: Yes) */
    "startidx": number;
    /** Number Requested (Type: uint32, Required: Yes) */
    "count": number;
    /** Number of Tags Specified (Type: uint32, Required: Yes) */
    "tagcount": number;
    /** Number of User specific tags requested (Type: uint32, Required: Yes) */
    "usertagcount": number;
    /** Whether the user making the request is an admin for the app and can see private files (Type: bool, Required: No) */
    "hasappadminaccess"?: boolean;
    /** EPublishedFileInfoMatchingFileType, defaults to k_PFI_MatchingFileType_Items (Type: uint32, Required: No) */
    "fileType"?: number;
    /** Tag to filter result set (Type: string[], Required: No) */
    "tag"?: string[];
    /** A user specific tag (Type: string[], Required: No) */
    "usertag"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ResultSetSummary(params?: {
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** appID relevant to all subsequent tags (Type: uint64, Required: Yes) */
    "appid": string | number;
    /** Number of Tags Specified (Type: uint32, Required: Yes) */
    "tagcount": number;
    /** Number of User specific tags requested (Type: uint32, Required: Yes) */
    "usertagcount": number;
    /** Whether the user making the request is an admin for the app and can see private files (Type: bool, Required: No) */
    "hasappadminaccess"?: boolean;
    /** EPublishedFileInfoMatchingFileType, defaults to k_PFI_MatchingFileType_Items (Type: uint32, Required: No) */
    "fileType"?: number;
    /** Tag to filter result set (Type: string[], Required: No) */
    "tag"?: string[];
    /** A user specific tag (Type: string[], Required: No) */
    "usertag"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamPublishedItemVoting {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  ItemVoteSummary(params?: {
    /** Steam ID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** appID of product (Type: uint32, Required: Yes) */
    "appid": number;
    /** Count of how many items we are querying (Type: uint32, Required: Yes) */
    "count": number;
    /** The Published File ID who's vote details are required (Type: uint64[], Required: No) */
    "publishedfileid"?: string | number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  UserVoteSummary(params?: {
    /** Steam ID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Count of how many items we are querying (Type: uint32, Required: Yes) */
    "count": number;
    /** A Specific Published Item (Type: uint64[], Required: No) */
    "publishedfileid"?: string | number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamRemoteStorage {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  EnumerateUserSubscribedFiles(params?: {
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** appID of product (Type: uint32, Required: Yes) */
    "appid": number;
    /** EUCMListType (Type: uint32, Required: No) */
    "listtype"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetCollectionDetails(params?: {
    /** Number of collections being requested (Type: uint32, Required: Yes) */
    "collectioncount": number;
    /** collection ids to get the details for (Type: uint64[], Required: Yes) */
    "publishedfileids": string | number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetPublishedFileDetails(params?: {
    /** Number of items being requested (Type: uint32, Required: Yes) */
    "itemcount": number;
    /** published file id to look up (Type: uint64[], Required: Yes) */
    "publishedfileids": string | number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUGCFileDetails(params?: {
    /** If specified, only returns details if the file is owned by the SteamID specified (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** ID of UGC file to get info for (Type: uint64, Required: Yes) */
    "ugcid": string | number;
    /** appID of product (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SetUGCUsedByGC(params?: {
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** ID of UGC file whose bits are being fiddled with (Type: uint64, Required: Yes) */
    "ugcid": string | number;
    /** appID of product to change updating state for (Type: uint32, Required: Yes) */
    "appid": number;
    /** New state of flag (Type: bool, Required: Yes) */
    "used": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SubscribePublishedFile(params?: {
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** appID of product (Type: uint32, Required: Yes) */
    "appid": number;
    /** published file id to subscribe to (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  UnsubscribePublishedFile(params?: {
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** appID of product (Type: uint32, Required: Yes) */
    "appid": number;
    /** published file id to unsubscribe from (Type: uint64, Required: Yes) */
    "publishedfileid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamSpecialSurvey {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  CheckUserStatus(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** ID of the survey being taken (Type: uint32, Required: Yes) */
    "surveyid": number;
    /** SteamID of the user taking the survey (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Survey identity verification token for the user (Type: string, Required: Yes) */
    "token": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SetUserFinished(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** ID of the survey being taken (Type: uint32, Required: Yes) */
    "surveyid": number;
    /** SteamID of the user taking the survey (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Survey identity verification token for the user (Type: string, Required: Yes) */
    "token": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamTVService {
  /**
   * Set the ban for a specific broadcaster. The issuer is the logged in steam account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddChatBan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "chatter_steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "duration"?: number;
    /**  (Type: bool, Required: No) */
    "permanent"?: boolean;
    /**  (Type: bool, Required: No) */
    "undo"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Add or remove a moderator for this broadcast channel
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddChatModerator(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /**  (Type: fixed64, Required: No) */
    "moderator_steamid"?: string | number;
    /**  (Type: bool, Required: No) */
    "undo"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Add or remove a banned keyword in this broadcast channel chat
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddWordBan(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /**  (Type: string, Required: No) */
    "word"?: string;
    /**  (Type: bool, Required: No) */
    "undo"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * The user is cheering for a specific broadcast for a specific app.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AppCheer(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** App ID this cheer is for. (Type: uint32, Required: No) */
    "app_id"?: number;
    /** The thing being cheered on. ID is app dependent (could be steam id, match id, lobby id, server id, etc). (Type: fixed64, Required: No) */
    "cheer_target_id"?: string | number;
    /** The set of cheers this request represents (could be multiple of different types). (Type: CSteamTV_AppCheer_SingleCheerType[], Required: No) */
    "cheers"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Create a channel on SteamTV
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateBroadcastChannel(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Unique short broadcast channel name, part of Steam.TV URL (Type: string, Required: No) */
    "unique_name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Follow a broadcast channel
   * 
   * Version: 1
   * HTTP Method: POST
   */
  FollowBroadcastChannel(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Indicates this is an unfollow request (Type: bool, Required: No) */
    "undo"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get list of broadcaster info for this channel
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcastChannelBroadcasters(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get broadcast channel clips
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcastChannelClips(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a broadcast channel ID for a channel by name or owner SteamID
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcastChannelID(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Channel short name) (Type: string, Required: No) */
    "unique_name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get broadcast channel images
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcastChannelImages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** list of EBroadcastImage (Type: EBroadcastImageType, Required: No) */
    "image_types"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get user's interaction status with a broadcast channel
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcastChannelInteraction(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get broadcast channel link regions
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcastChannelLinks(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get broadcast channel profile data
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcastChannelProfile(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get broadcast channel live status
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetBroadcastChannelStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the list of featured broadcast channels
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetChannels(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The algorithm to use when picking channels to return (Type: EGetChannelsAlgorithm, Required: No) */
    "algorithm"?: any;
    /** The maximum number of results to return (Type: uint32, Required: No) */
    "count"?: number;
    /** Filter results to only this appid (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get list of bans for a specific broadcaster.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetChatBans(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the list of moderators for this broadcast channel
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetChatModerators(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get list of followed channels by a viewer
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFollowedChannels(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get list of games with active broadcasters
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGames(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The ID for the game (Type: uint32, Required: No) */
    "appid"?: number;
    /** The algorithm to use when picking games to return (Type: EGetGamesAlgorithm, Required: No) */
    "algorithm"?: any;
    /** The maximum number of results to return (Type: uint32, Required: No) */
    "count"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns homepage contents for user
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetHomePageContents(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets the broadcast channels that the current user owns
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMyBroadcastChannels(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns a user's SteamTV settings
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamTVUserSettings(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get list of channels a user is subscribed to
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSubscribedChannels(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns the list of banned keywords for this broadcast channel
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWordBans(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Joins the chat channel for a broadcast
   * 
   * Version: 1
   * HTTP Method: POST
   */
  JoinChat(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Report a broadcast channel
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ReportBroadcastChannel(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** The reason for the report (Type: string, Required: No) */
    "reason"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Searches for broadcast channels based on input keywords
   * 
   * Version: 1
   * HTTP Method: GET
   */
  Search(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "term"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Set broadcast channel image hash
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetBroadcastChannelImage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** EBroadcastImage (Type: EBroadcastImageType, Required: No) */
    "image_type"?: any;
    /** Index of the image (for supporting multiple uploads of the same type (Type: uint32, Required: No) */
    "image_index"?: number;
    /** width in pixels (Type: uint32, Required: No) */
    "image_width"?: number;
    /** height in pixels (Type: uint32, Required: No) */
    "image_height"?: number;
    /** in bytes (Type: uint32, Required: No) */
    "file_size"?: number;
    /** eg .jpg (Type: string, Required: No) */
    "file_extension"?: string;
    /** image SHA (Type: string, Required: No) */
    "file_hash"?: string;
    /** indicates this is a delete request (Type: bool, Required: No) */
    "undo"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Set broadcast channel link regions
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetBroadcastChannelLinkRegions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /**  (Type: CSteamTV_SetBroadcastChannelLinkRegions_Request.Links[], Required: No) */
    "links"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Set broadcast channel profile data
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetBroadcastChannelProfile(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** long channel name (Type: string, Required: No) */
    "name"?: string;
    /** primary channel language (Steam shortname) (Type: string, Required: No) */
    "language"?: string;
    /** short channel desciption (Type: string, Required: No) */
    "headline"?: string;
    /** long channel desciption (Type: string, Required: No) */
    "summary"?: string;
    /** community avatar hash (Type: string, Required: No) */
    "avatar_hash"?: string;
    /** broadcast channel schedule (Type: string, Required: No) */
    "schedule"?: string;
    /** broadcast channel rules (Type: string, Required: No) */
    "rules"?: string;
    /** JSON data representing the channel panel layout (Type: string, Required: No) */
    "panels"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Sets a user's SteamTV settings
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetSteamTVUserSettings(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Send email when followed stream starts (Type: bool, Required: No) */
    "stream_live_email"?: boolean;
    /** Send Steam notification when followed stream starts (Type: bool, Required: No) */
    "stream_live_notification"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Subscribe to a broadcast channel
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SubscribeBroadcastChannel(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Broadcast channel ID (Type: fixed64, Required: No) */
    "broadcast_channel_id"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamUser {
  /**
   * 
   * Version: 4
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  CheckAppOwnership(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** AppID to check for ownership (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetAppPriceInfo(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Comma-delimited list of appids (max: 100) (Type: string, Required: Yes) */
    "appids": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDeletedSteamIDs(params?: {
    /** Steamworks Web API publisher authentication key. (Type: string, Required: Yes) */
    "key"?: string;
    /** An unsigned 64-bit value used to page through deleted accounts. Pass 0 when calling this             API for the first time, then pass the value returned from the previous call for each             additional request. This value will need to be stored on your server for future calls. (Type: uint64, Required: Yes) */
    "rowversion": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFriendList(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** relationship type (ex: friend) (Type: string, Required: No) */
    "relationship"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerBans(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Comma-delimited list of SteamIDs (Type: string, Required: Yes) */
    "steamids": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   */
  GetPlayerSummaries(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Comma-delimited list of SteamIDs (max: 100) (Type: string, Required: Yes) */
    "steamids": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 5
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetPublisherAppOwnership(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetPublisherAppOwnershipChanges(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The unsigned 64-bit row version to read package changes from. The row version of data read up to will be returned for use in future calls. (Type: string, Required: Yes) */
    "packagerowversion": string;
    /** The unsigned 64-bit row version to read CD Key changes from. The row version of data read up to will be returned for use in future calls. (Type: string, Required: Yes) */
    "cdkeyrowversion": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserGroupList(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 3
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  GrantPackage(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** PackageID to grant (Type: uint32, Required: Yes) */
    "packageid": number;
    /** ip address of user in string format (xxx.xxx.xxx.xxx). (Type: string, Required: No) */
    "ipaddress"?: string;
    /** Optionally associate third party key during grant. 'thirdpartyappid' will have to be set. (Type: string, Required: No) */
    "thirdpartykey"?: string;
    /** Has to be set if 'thirdpartykey' is set. The appid associated with the 'thirdpartykey'. (Type: uint32, Required: No) */
    "thirdpartyappid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  ResolveVanityURL(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** The vanity URL to get a SteamID for (Type: string, Required: Yes) */
    "vanityurl": string;
    /** The type of vanity URL. 1 (default): Individual profile, 2: Group, 3: Official game group (Type: int32, Required: No) */
    "url_type"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  RevokePackage(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** PackageID to grant (Type: uint32, Required: Yes) */
    "packageid": number;
    /** Reason for why to revoke (Type: string, Required: Yes) */
    "revokereason": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamUserAuth {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  AuthenticateUserTicket(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Ticket from GetAuthSessionTicket. (Type: string, Required: Yes) */
    "ticket": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamUserOAuth {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFriendList(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGroupList(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTokenDetails(params?: {
    /** OAuth2 token for which to return details (Type: string, Required: Yes) */
    "access_token"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserSummaries(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  Search(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamUserStats {
  /**
   * 
   * Version: 2
   * HTTP Method: GET
   */
  GetGlobalAchievementPercentagesForApp(params?: {
    /** GameID to retrieve the achievement percentages for (Type: uint64, Required: Yes) */
    "gameid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGlobalStatsForGame(params?: {
    /** AppID that we're getting global stats for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Number of stats get data for (Type: uint32, Required: Yes) */
    "count": number;
    /** Names of stat to get data for (Type: string[], Required: Yes) */
    "name": string[];
    /** Start date for daily totals (unix epoch timestamp) (Type: uint32, Required: No) */
    "startdate"?: number;
    /** End date for daily totals (unix epoch timestamp) (Type: uint32, Required: No) */
    "enddate"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetNumberOfCurrentPlayers(params?: {
    /** AppID that we're getting user count for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPlayerAchievements(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** AppID to get achievements for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Language to return strings for (Type: string, Required: No) */
    "l"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   */
  GetSchemaForGame(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** localized language to return (english, french, etc.) (Type: string, Required: No) */
    "l"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 2
   * HTTP Method: GET
   */
  GetUserStatsForGame(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SetUserStatsForGame(params?: {
    /** access key (Type: string, Required: Yes) */
    "key"?: string;
    /** SteamID of user (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** appid of game (Type: uint32, Required: Yes) */
    "appid": number;
    /** Number of stats and achievements to set a value for (name/value param pairs) (Type: uint32, Required: Yes) */
    "count": number;
    /** Name of stat or achievement to set (Type: string[], Required: Yes) */
    "name": string[];
    /** Value to set (Type: uint32[], Required: Yes) */
    "value": number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamWebAPIUtil {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetServerInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSupportedAPIList(params?: {
    /** access key (Type: string, Required: No) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISteamWorkshop {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  AssociateWorkshopItems(params?: {
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Number of items to associate (Type: uint32, Required: Yes) */
    "itemcount": number;
    /** the workshop published file id (Type: uint64[], Required: No) */
    "publishedfileid"?: string | number[];
    /** 3rd party ID for item (Type: uint32[], Required: No) */
    "gameitemid"?: number[];
    /** Percentage of revenue the owners of the workshop item will get from the sale of the item [0.0, 100.0].  For bundle-like items, send over an entry for each item in the bundle (gameitemid = bundle id) with different publishedfileids and with the revenue percentage pre-split amongst the items in the bundle (i.e. 30% / 10 items in the bundle) (Type: float[], Required: No) */
    "revenuepercentage"?: number[];
    /** Game's description of the game item (Type: string[], Required: No) */
    "gameitemdescription"?: string[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  GetContributors(params?: {
    /** AppID of game this transaction is for (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IStoreAppSimilarityService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  IdentifyClustersFromPlaytime(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "sort"?: number;
    /** Number of clusters to populare and return; if 0, all clusters will be returned (Type: int32, Required: No) */
    "clusters_to_return"?: number;
    /** When limiting the number of clusters, can change this seed to select a different cluster than the previous call. (Type: int32, Required: No) */
    "cluster_index"?: number;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /** If passed, item data will be returned (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  PrioritizeAppsForUser(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "country_code"?: string;
    /**  (Type: StoreItemID[], Required: No) */
    "ids"?: any[];
    /**  (Type: StoreAppSimilarityPriorityOptions, Required: No) */
    "options"?: any;
    /**  (Type: bool, Required: No) */
    "debug"?: boolean;
    /**  (Type: bool, Required: No) */
    "include_owned_games"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IStoreBrowseService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetContentHubConfig(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /** enum (Type: int32[], Required: No) */
    "excluded_content_descriptorids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns all DLC appids for games owned by the user.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDLCForApps(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: CStorePageFilter, Required: No) */
    "store_page_filter"?: any;
    /** Returns all DLC appids for games owned by the user. (Type: uint64, Required: No) */
    "steamid"?: string | number;
    /** Returns all DLC appids for games owned by the user. (Type: StoreItemID[], Required: No) */
    "appids"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns all DLC appids for the specified games.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDLCForAppsSolr(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: uint32[], Required: No) */
    "appids"?: number[];
    /**  (Type: string, Required: No) */
    "flavor"?: string;
    /**  (Type: uint32, Required: No) */
    "count"?: number;
    /**  (Type: CStorePageFilter, Required: No) */
    "store_page_filter"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get additional meta data specific to hardware store items (things that require physical shipping)
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetHardwareItems(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "packageid"?: number[];
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get information about items on the store
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItems(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreItemID[], Required: No) */
    "ids"?: any[];
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetPriceStops(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "country_code"?: string;
    /**  (Type: string, Required: No) */
    "currency_code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get category definitions for store.  This is a public-facing API (as compared to StoreCatalog.GetCategories, which is intended for PHP)
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetStoreCategories(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** ELanguage (Type: int32, Required: No) */
    "elanguage"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IStoreCatalogService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetDevPageAllAppsLinked(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "clan_account_ids"?: number[];
    /**  (Type: bool, Required: No) */
    "ignore_dlc"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDevPageLinks(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDevPagesForPartner(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "partnerid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetDevPageLink(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: CDeveloperPageLink, Required: No) */
    "link"?: any;
    /**  (Type: bool, Required: No) */
    "remove"?: boolean;
    /**  (Type: bool, Required: No) */
    "update_json_only"?: boolean;
    /**  (Type: bool, Required: No) */
    "skip_clan_permissions"?: boolean;
    /**  (Type: uint32, Required: No) */
    "partner_id"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IStoreCurationService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetListDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint64, Required: No) */
    "listid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLists(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "list_state"?: number;
    /**  (Type: uint32, Required: No) */
    "start"?: number;
    /**  (Type: uint32, Required: No) */
    "count"?: number;
    /**  (Type: bool, Required: No) */
    "return_total_only"?: boolean;
    /**  (Type: bool, Required: No) */
    "return_metadata_only"?: boolean;
    /**  (Type: int32, Required: No) */
    "max_apps"?: number;
    /**  (Type: fixed64, Required: No) */
    "sale_clan_event_gid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IStoreMarketingService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFrontPageConfig(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemsToFeature(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /**  (Type: CStoreMarketing_GetItemsToFeature_Request_SpotlightFilter, Required: No) */
    "include_spotlights"?: any;
    /**  (Type: bool, Required: No) */
    "include_dailydeals"?: boolean;
    /**  (Type: int32, Required: No) */
    "include_top_specials_count"?: number;
    /**  (Type: bool, Required: No) */
    "include_purchase_recommendations"?: boolean;
    /**  (Type: StoreItemID[], Required: No) */
    "additional_purchase_item_ids"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IStorePreferencesService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetIgnoreList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IStoreQueryService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemByUserCombinedTagsPriority(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: int32, Required: No) */
    "sort"?: number;
    /**  (Type: uint32, Required: No) */
    "max_items"?: number;
    /**  (Type: bool, Required: No) */
    "randomize"?: boolean;
    /**  (Type: bool, Required: No) */
    "include_packages"?: boolean;
    /**  (Type: bool, Required: No) */
    "include_bundles"?: boolean;
    /**  (Type: CStorePageFilter, Required: No) */
    "filters"?: any;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemsByUserRecommendedTags(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: int32, Required: No) */
    "sort"?: number;
    /**  (Type: CStorePageFilter, Required: No) */
    "filters"?: any;
    /**  (Type: uint32, Required: No) */
    "recommended_tag_count"?: number;
    /**  (Type: uint32[], Required: No) */
    "min_items_per_tags"?: number[];
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: CStoreQuery_GetItemsByUserRecommendedTags_Request_Section[], Required: No) */
    "sections"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  MoreLikeThis(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "query_name"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /**  (Type: StoreItemID, Required: No) */
    "item_id"?: any;
    /**  (Type: int32, Required: No) */
    "count"?: number;
    /**  (Type: CStoreQueryFilters, Required: No) */
    "filters"?: any;
    /**  (Type: CStoreQuery_MoreLikeThis_Request_MoreLikeThisOptions, Required: No) */
    "options"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  Query(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Descriptive name of the query or caller; will be used in logging and metrics. (Type: string, Required: No) */
    "query_name"?: string;
    /**  (Type: CStoreQueryParams, Required: No) */
    "query"?: any;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /** If passed, item data will be returned (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** 2-character override country code for pulling data from other countries (Type: string, Required: No) */
    "override_country_code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  SearchSuggestions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Descriptive name of the query or caller; will be used in logging and metrics. (Type: string, Required: No) */
    "query_name"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: string, Required: No) */
    "search_term"?: string;
    /**  (Type: uint32, Required: No) */
    "max_results"?: number;
    /**  (Type: CStoreQueryFilters, Required: No) */
    "filters"?: any;
    /** If passed, item data will be returned (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Use Solr's spellchecking feature if true. (Type: bool, Required: No) */
    "use_spellcheck"?: boolean;
    /** Include tags in search results (Type: bool, Required: No) */
    "search_tags"?: boolean;
    /** Include creators (publishers/developers/franchises) in search results (Type: bool, Required: No) */
    "search_creators"?: boolean;
    /** Pre-filter returned creators (Type: bool, Required: No) */
    "prefilter_creators"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IStoreSalesService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetUserVotes(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "sale_appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetVoteDefinitions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: uint32, Required: No) */
    "sale_appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetVote(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: int32, Required: No) */
    "voteid"?: number;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint32, Required: No) */
    "sale_appid"?: number;
    /**  (Type: uint32, Required: No) */
    "developerid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IStoreService {
  /**
   * Marks a position is deleted and will no longer be surfaced
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DeleteReservationPositionMessage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "edistributor"?: number;
    /**  (Type: string, Required: No) */
    "product_identifier"?: string;
    /**  (Type: uint32, Required: No) */
    "start_queue_position"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Marks a position is deleted and will no longer be surfaced
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAllReservationPositionMessages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAppInfo(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets a list of apps available on the Steam Store.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAppList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Return only items that have been modified since this date. (Type: uint32, Required: No) */
    "if_modified_since"?: number;
    /** Return only items that have a description in this language. (Type: string, Required: No) */
    "have_description_language"?: string;
    /** Include games (defaults to enabled) (Type: bool, Required: No) */
    "include_games"?: boolean;
    /** Include DLC (Type: bool, Required: No) */
    "include_dlc"?: boolean;
    /** Include software items (Type: bool, Required: No) */
    "include_software"?: boolean;
    /** Include videos and series (Type: bool, Required: No) */
    "include_videos"?: boolean;
    /** Include hardware (Type: bool, Required: No) */
    "include_hardware"?: boolean;
    /** For continuations, this is the last appid returned from the previous call. (Type: uint32, Required: No) */
    "last_appid"?: number;
    /** Number of results to return at a time.  Default 10k, max 50k. (Type: uint32, Required: No) */
    "max_results"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a list of games for the user to explore on the store.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDiscoveryQueue(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: EStoreDiscoveryQueueType, Required: No) */
    "queue_type"?: any;
    /**  (Type: string, Required: No) */
    "country_code"?: string;
    /**  (Type: bool, Required: No) */
    "rebuild_queue"?: boolean;
    /**  (Type: bool, Required: No) */
    "settings_changed"?: boolean;
    /**  (Type: CStoreDiscoveryQueueSettings, Required: No) */
    "settings"?: any;
    /**  (Type: bool, Required: No) */
    "rebuild_queue_if_stale"?: boolean;
    /**  (Type: bool, Required: No) */
    "ignore_user_preferences"?: boolean;
    /**  (Type: bool, Required: No) */
    "no_experimental_results"?: boolean;
    /**  (Type: uint32, Required: No) */
    "experimental_cohort"?: number;
    /**  (Type: bool, Required: No) */
    "debug_get_solr_query"?: boolean;
    /**  (Type: CStorePageFilter, Required: No) */
    "store_page_filter"?: any;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the settings that were used to generate a user's discovery queue.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDiscoveryQueueSettings(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: EStoreDiscoveryQueueType, Required: No) */
    "queue_type"?: any;
    /**  (Type: CStorePageFilter, Required: No) */
    "store_page_filter"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns all the apps skipped so far in the given discovery queue for the given user.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetDiscoveryQueueSkippedApps(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: EStoreDiscoveryQueueType, Required: No) */
    "queue_type"?: any;
    /**  (Type: CStorePageFilter, Required: No) */
    "store_page_filter"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the list of games a user is following
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGamesFollowed(params?: {
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the number of games a user is following
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetGamesFollowedCount(params?: {
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Gets tag names in a different language
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetLocalizedNameForTags(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: uint32[], Required: No) */
    "tagids"?: number[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get all whitelisted tags, with localized names.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMostPopularTags(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a set of tags that are recommended for the user based on recent playtime.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetRecommendedTagsForUser(params?: {
    /**  (Type: string, Required: Yes) */
    "language": string;
    /**  (Type: string, Required: Yes) */
    "country_code": string;
    /** Biases tags towards tags that are less common. e.g. Favor Zombies over Action if the user plays the same number of games with both tags. (Type: bool, Required: Yes) */
    "favor_rarer_tags": boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetStorePreferences(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "country_code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the list of tags, localized
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTagList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** The hash returned in the last call.  Will return no results if the list hasn't changed. (Type: string, Required: No) */
    "have_version_hash"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get information about a user's relationship to a game - ownership, wishlist, discovery queue state, etc.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetUserGameInterestState(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint32, Required: No) */
    "store_appid"?: number;
    /**  (Type: uint32, Required: No) */
    "beta_appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetWishlistDemoEmailStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint32, Required: No) */
    "demo_appid"?: number;
    /**  (Type: bool, Required: No) */
    "allow_late_firing"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Move UTM data from the PartnerLinkTrackingLogNoUser table to the PartnerLinkTrackingLogWithUser table
   * 
   * Version: 1
   * HTTP Method: POST
   */
  MigratePartnerLinkTracking(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "accountid"?: number;
    /**  (Type: uint64, Required: No) */
    "browserid"?: string | number;
    /** enum (Type: EPartnerLinkTrackingBackfillSource, Required: No) */
    "backfill_source"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  QueueWishlistDemoEmailToFire(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint32, Required: No) */
    "demo_appid"?: number;
    /**  (Type: bool, Required: No) */
    "allow_late_firing"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Refreshes all of the caches through the store features servers
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ReloadAllReservationPositionMessages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Creates/Update a reservation position message for people in the queue or next queue position for people deciding to join
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetReservationPositionMessage(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CReservationPositionMessage[], Required: No) */
    "settings"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Skip an item in the user's queue.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SkipDiscoveryQueueItem(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** enum (Type: EStoreDiscoveryQueueType, Required: No) */
    "queue_type"?: any;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: CStorePageFilter, Required: No) */
    "store_page_filter"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Updates the reservations for a user
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdatePackageReservations(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32[], Required: No) */
    "packages_to_reserve"?: number[];
    /**  (Type: uint32[], Required: No) */
    "packages_to_unreserve"?: number[];
    /**  (Type: string, Required: No) */
    "country_code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IStoreTopSellersService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetCountryList(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWeeklyTopSellers(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** 2-character country code; leave blank for global.  Always pass user country in the context object. (Type: string, Required: No) */
    "country_code"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Start date of the week to return.  Leave blank for current week. (Type: uint32, Required: No) */
    "start_date"?: number;
    /** For pagination, start at the Nth top seller. (Type: int32, Required: No) */
    "page_start"?: number;
    /** # of top sellers to return per page. (Type: int32, Required: No) */
    "page_count"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISupportAgentsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetQuickText(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "quicktext_id"?: number;
    /**  (Type: string, Required: No) */
    "language"?: string;
    /**  (Type: bool, Required: No) */
    "from_sql"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ISupportService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetAccountName(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSteamID(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "account_name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSupportMessages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: uint32, Required: No) */
    "offset"?: number;
    /**  (Type: uint32, Required: No) */
    "limit"?: number;
    /**  (Type: bool, Required: No) */
    "include_inactive"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ITFItems_440 {
  /**
   * 
   * Version: 2
   * HTTP Method: GET
   */
  GetGoldenWrenches(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ITFPromos_440 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemID(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The promo ID to grant an item for (Type: uint32, Required: Yes) */
    "promoid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GrantItem(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The promo ID to grant an item for (Type: uint32, Required: Yes) */
    "promoid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ITFPromos_620 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemID(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The promo ID to grant an item for (Type: uint32, Required: Yes) */
    "PromoID": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GrantItem(params?: {
    /** The Steam ID to fetch items for (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** The promo ID to grant an item for (Type: uint32, Required: Yes) */
    "PromoID": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ITFSystem_440 {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWorldStatus(params?: {
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ITestExternalPrivilegeService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  CallPublisherKey(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  CallPublisherKeyOwnsApp(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ITestService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CallWithIgnoredExternalField(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: bool, Required: No) */
    "internal_field_should_be_set"?: boolean;
    /**  (Type: bool, Required: No) */
    "internal_field_expected_value"?: boolean;
    /**  (Type: CMsgTest_CallWithIgnoredExternalField_Request_Nested, Required: No) */
    "external_nested"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  NotifyWithIgnoredExternalField(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: bool, Required: No) */
    "internal_field_should_be_set"?: boolean;
    /**  (Type: bool, Required: No) */
    "internal_field_expected_value"?: boolean;
    /**  (Type: CMsgTest_NotifyWithIgnoredExternalField_Notification_Nested, Required: No) */
    "external_nested"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ITrustService {
  /**
   * Returns the Trust Score for the provided account in the specified appid.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetTrustScore(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steam ID of user for which Trust is being requested. (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** App ID for which Trust is being requested. (Type: uint32, Required: Yes) */
    "appid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface ITwoFactorService {
  /**
   * Add two-factor authenticator to the logged-in account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddAuthenticator(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid to use (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Current authenticator time (Type: uint64, Required: No) */
    "authenticator_time"?: string | number;
    /** locally computed serial (deprecated) (Type: fixed64, Required: No) */
    "serial_number"?: string | number;
    /** Authenticator type (Type: uint32, Required: No) */
    "authenticator_type"?: number;
    /** Authenticator identifier (Type: string, Required: No) */
    "device_identifier"?: string;
    /** ID of phone to use for SMS verification (Type: string, Required: No) */
    "sms_phone_id"?: string;
    /** HTTP headers alternating by K/V (Type: string[], Required: No) */
    "http_headers"?: string[];
    /** What the version of our token should be (Type: uint32, Required: No) */
    "version"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Generate emergency authenticator codes
   * 
   * Version: 1
   * HTTP Method: POST
   */
  CreateEmergencyCodes(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Destroy emergency authenticator codes for the account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  DestroyEmergencyCodes(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid to use (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Finalize two-factor authentication addition to the logged-in account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  FinalizeAddAuthenticator(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid to use (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Current auth code (Type: string, Required: No) */
    "authenticator_code"?: string;
    /** Current authenticator time (Type: uint64, Required: No) */
    "authenticator_time"?: string | number;
    /** Activation code from out-of-band message (Type: string, Required: No) */
    "activation_code"?: string;
    /** HTTP headers alternating by K/V (Type: string[], Required: No) */
    "http_headers"?: string[];
    /** When finalizing with an SMS code, pass the request on to the PhoneService to update its state too. (Type: bool, Required: No) */
    "validate_sms_code"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get two-factor authentication settings for the logged-in account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  QueryStatus(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** steamid to use (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** enum (Type: int32, Required: No) */
    "include"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get server's idea of the current time
   * 
   * Version: 1
   * HTTP Method: POST
   */
  QueryTime(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Current time on the sender (for stats, don't trust this) (Type: uint64, Required: No) */
    "sender_time"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Remove two-factor authentication addition from the logged-in account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveAuthenticator(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Password needed to remove token (Type: string, Required: No) */
    "revocation_code"?: string;
    /** Reason the authenticator is being removed (Type: uint32, Required: No) */
    "revocation_reason"?: number;
    /** Type of Steam Guard to use once token is removed (Type: uint32, Required: No) */
    "steamguard_scheme"?: number;
    /** Remove all steamguard cookies (Type: bool, Required: No) */
    "remove_all_steamguard_cookies"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Continue challenge-based authenticator removal
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveAuthenticatorViaChallengeContinue(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Code from SMS (Type: string, Required: No) */
    "sms_code"?: string;
    /** Generate new token (instead of removing old one) (Type: bool, Required: No) */
    "generate_new_token"?: boolean;
    /** What the version of our token should be (Type: uint32, Required: No) */
    "version"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Start challenge-based authenticator removal
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveAuthenticatorViaChallengeStart(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Send email to the account
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SendEmail(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Steamid to use (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Type of email to send (ETwoFactorEmailType::*) (Type: uint32, Required: No) */
    "email_type"?: number;
    /** Include activation code in email parameters (Type: bool, Required: No) */
    "include_activation_code"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Update the version for my token
   * 
   * Version: 1
   * HTTP Method: POST
   */
  UpdateTokenVersion(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** What the version of our token should be (Type: uint32, Required: No) */
    "version"?: number;
    /** HMAC digest over user's private key (Type: bytes, Required: No) */
    "signature"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Validate (and consume) a token
   * 
   * Version: 1
   * HTTP Method: POST
   */
  ValidateToken(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** code to validate (Type: string, Required: No) */
    "code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IUserAccountService {
  /**
   * Gets the available promotional discounts available to the user
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetAvailableValveDiscountPromotions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: string, Required: No) */
    "country_code"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Returns balance and details about any users wallet
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetClientWalletDetails(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: bool, Required: No) */
    "include_balance_in_usd"?: boolean;
    /**  (Type: int32, Required: No) */
    "wallet_region"?: number;
    /**  (Type: bool, Required: No) */
    "include_formatted_balance"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the country code associated with the passed steamid (only available for logged-in user or support)
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetUserCountry(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IUserGameNotesService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetGamesWithNotes(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetNotesForGame(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: string, Required: No) */
    "shortcut_name"?: string;
    /**  (Type: uint32, Required: No) */
    "shortcutid"?: number;
    /** Include the text content.  If not passed, content will be empty in the response objects but title will be available. (Type: bool, Required: No) */
    "include_content"?: boolean;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IUserReviewsService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFriendsRecommendedApp(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetIndividualRecommendations(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CUserReviews_GetIndividualRecommendations_Request_RecommendationRequest[], Required: No) */
    "requests"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IUserStoreVisitService {
  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetFrequentlyVisitedPages(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetMostVisitedItemsOnStore(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /**  (Type: uint32, Required: No) */
    "count"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IVACManagementService {
  /**
   * GameModuleLoadReport
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  GameModuleLoadReport(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: string, Required: Yes) */
    "file_report": string;
    /**  (Type: uint32, Required: Yes) */
    "total_files": number;
    /**  (Type: uint32, Required: Yes) */
    "process_id": number;
    /**  (Type: uint32, Required: Yes) */
    "internal_error": number;
    /**  (Type: string, Required: Yes) */
    "command_line": string;
    /**  (Type: bool, Required: Yes) */
    "insecure": boolean;
    /**  (Type: string, Required: Yes) */
    "launch_report": string;
    /**  (Type: string, Required: Yes) */
    "diagnostics": string;
    /**  (Type: uint64, Required: Yes) */
    "steamid_reporter": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IVideoService {
  /**
   * Returns the video bookmarks locations for the specific videos. Includes playback settings per video
   * 
   * Version: 1
   * HTTP Method: POST
   */
  GetVideoBookmarks(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** List of App IDs to grab bookmarks for. Can be empty if using updated_since. (Type: uint32[], Required: No) */
    "appids"?: number[];
    /** Only return results after time. Min value is 1. (seconds since epoch January 1st, 1970 Unix Time) (Type: uint32, Required: No) */
    "updated_since"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Bookmarks the locations in the video the user has reached. As as record playback settings per video. Fire and forget.
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetVideoBookmark(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** list of bookmarks we want to store. (Type: VideoBookmark[], Required: No) */
    "bookmarks"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IWishlistService {
  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddToWishlist(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: CUserInterface_NavData, Required: No) */
    "navdata"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  AddWishlistItemCategory(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint64, Required: No) */
    "categoryid"?: string | number;
    /**  (Type: string, Required: No) */
    "category_name"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetItemCategories(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetSharedWishlistCategories(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: fixed64, Required: No) */
    "steamid"?: string | number;
    /**  (Type: string, Required: No) */
    "share_token"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a user's wishlist.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWishlist(params?: {
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWishlistCategories(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get the number of items on a user's wishlist.
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWishlistItemCount(params?: {
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWishlistItemsOnSale(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: StoreBrowseContext, Required: No) */
    "context"?: any;
    /**  (Type: StoreBrowseItemDataRequest, Required: No) */
    "data_request"?: any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a user's paginated wishlist applying various sorts and filters
   * 
   * Version: 1
   * HTTP Method: GET
   */
  GetWishlistSortedFiltered(params?: {
    /**  (Type: uint64, Required: Yes) */
    "steamid": string | number;
    /**  (Type: {message}, Required: Yes) */
    "context": any;
    /** If passed, item data will be returned (Type: {message}, Required: Yes) */
    "data_request": any;
    /**  (Type: {enum}, Required: No) */
    "sort_order"?: any;
    /**  (Type: {message}, Required: Yes) */
    "filters": any;
    /** Data in this range will be filled in with StoreBrowse data (Type: int32, Required: No) */
    "start_index"?: number;
    /**  (Type: int32, Required: No) */
    "page_size"?: number;
    /** The wishlist share token. Determines what items are visible and the effective filters. (Type: string, Required: Yes) */
    "share_token": string;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveFromWishlist(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  RemoveWishlistItemCategory(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: No) */
    "appid"?: number;
    /**  (Type: uint64, Required: No) */
    "categoryid"?: string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * 
   * Version: 1
   * HTTP Method: POST
   */
  SetWishlistCategoryNotifications(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: CWishlist_SetWishlistCategoryNotifications_Request_CategorySettings[], Required: No) */
    "categories"?: any[];
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

export interface IWorkshopService {
  /**
   * Add a special payment for an appid/gameitemid.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  AddSpecialPayment(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /** AppID (Type: uint32, Required: Yes) */
    "appid": number;
    /** Game Item ID (Type: uint32, Required: Yes) */
    "gameitemid": number;
    /** YYY-MM-DD formatted string (Type: string, Required: Yes) */
    "date": string;
    /** US Payment portion in USD Cents (Type: uint64, Required: Yes) */
    "payment_us_usd": string | number;
    /** ROW Payment portion in USD Cents (Type: uint64, Required: Yes) */
    "payment_row_usd": string | number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get a list of contributors for a specific gameitemid/app combination.
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetFinalizedContributors(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint32, Required: Yes) */
    "gameitemid": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Get item revenue for a specific app/item definition for a date range.
   * 
   * Version: 1
   * HTTP Method: GET
   * Note: Publisher-only API (requires partnerKey)
   */
  GetItemDailyRevenue(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint32, Required: Yes) */
    "item_id": number;
    /**  (Type: uint32, Required: Yes) */
    "date_start": number;
    /**  (Type: uint32, Required: Yes) */
    "date_end": number;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Populate block of item descriptions.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  PopulateItemDescriptions(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: {message}, Required: Yes) */
    "languages": any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

  /**
   * Set item payment rules.
   * 
   * Version: 1
   * HTTP Method: POST
   * Note: Publisher-only API (requires partnerKey)
   */
  SetItemPaymentRules(params?: {
    /** Access key (Type: string, Required: Yes) */
    "key"?: string;
    /**  (Type: uint32, Required: Yes) */
    "appid": number;
    /**  (Type: uint32, Required: Yes) */
    "gameitemid": number;
    /**  (Type: {message}, Required: Yes) */
    "associated_workshop_files": any;
    /**  (Type: {message}, Required: Yes) */
    "partner_accounts": any;
    /** Only validates the rules and does not persist them. (Type: bool, Required: No) */
    "validate_only"?: boolean;
    /**  (Type: bool, Required: Yes) */
    "make_workshop_files_subscribable": boolean;
    /**  (Type: {message}, Required: Yes) */
    "associated_workshop_file_for_direct_payments": any;
    /** Override API version */
    _version?: number;
    /** Override HTTP method */
    _httpMethod?: "GET" | "POST";
  }): Promise<any>;

}

/**
 * SteamAPI client dynamically mapped using JavaScript Proxies.
 * Supports calling all 200+ interfaces and thousands of endpoints documented on steamapi.xpaw.me
 */
export class SteamAPI {
  constructor(options?: SteamAPIOptions);

  apiKey: string;
  partnerKey: string;
  accessToken: string;
  baseUrl: string;
  format: string;
  headers: Record<string, string>;

  /** Interface endpoints for IAccountCartService */
  IAccountCartService: IAccountCartService;
  /** Interface endpoints for IAccountPrivacyService */
  IAccountPrivacyService: IAccountPrivacyService;
  /** Interface endpoints for IAccountPrivateAppsService */
  IAccountPrivateAppsService: IAccountPrivateAppsService;
  /** Interface endpoints for IAssetSetPublishingService */
  IAssetSetPublishingService: IAssetSetPublishingService;
  /** Interface endpoints for IAuctionService */
  IAuctionService: IAuctionService;
  /** Interface endpoints for IAuthenticationService */
  IAuthenticationService: IAuthenticationService;
  /** Interface endpoints for IAuthenticationSupportService */
  IAuthenticationSupportService: IAuthenticationSupportService;
  /** Interface endpoints for IBillingService */
  IBillingService: IBillingService;
  /** Interface endpoints for IBroadcastService */
  IBroadcastService: IBroadcastService;
  /** Interface endpoints for ICSGOPlayers_730 */
  ICSGOPlayers_730: ICSGOPlayers_730;
  /** Interface endpoints for ICSGOServers_730 */
  ICSGOServers_730: ICSGOServers_730;
  /** Interface endpoints for ICSGOStreamSystem_730 */
  ICSGOStreamSystem_730: ICSGOStreamSystem_730;
  /** Interface endpoints for ICSGOTournaments_730 */
  ICSGOTournaments_730: ICSGOTournaments_730;
  /** Interface endpoints for IChatRoomService */
  IChatRoomService: IChatRoomService;
  /** Interface endpoints for ICheatReportingService */
  ICheatReportingService: ICheatReportingService;
  /** Interface endpoints for ICheckoutService */
  ICheckoutService: ICheckoutService;
  /** Interface endpoints for ICitadelAdmin_1422450 */
  ICitadelAdmin_1422450: ICitadelAdmin_1422450;
  /** Interface endpoints for ICitadelAdmin_3488080 */
  ICitadelAdmin_3488080: ICitadelAdmin_3488080;
  /** Interface endpoints for ICitadelAdmin_3781850 */
  ICitadelAdmin_3781850: ICitadelAdmin_3781850;
  /** Interface endpoints for IClanFAQSService */
  IClanFAQSService: IClanFAQSService;
  /** Interface endpoints for IClanService */
  IClanService: IClanService;
  /** Interface endpoints for IClientCommService */
  IClientCommService: IClientCommService;
  /** Interface endpoints for IClientMetricsService */
  IClientMetricsService: IClientMetricsService;
  /** Interface endpoints for IClientStats_1046930 */
  IClientStats_1046930: IClientStats_1046930;
  /** Interface endpoints for ICloudService */
  ICloudService: ICloudService;
  /** Interface endpoints for ICommentModerationService */
  ICommentModerationService: ICommentModerationService;
  /** Interface endpoints for ICommunityService */
  ICommunityService: ICommunityService;
  /** Interface endpoints for IContentFilteringService */
  IContentFilteringService: IContentFilteringService;
  /** Interface endpoints for IContentModerationService */
  IContentModerationService: IContentModerationService;
  /** Interface endpoints for IContentServerConfigService */
  IContentServerConfigService: IContentServerConfigService;
  /** Interface endpoints for IContentServerDirectoryService */
  IContentServerDirectoryService: IContentServerDirectoryService;
  /** Interface endpoints for ICrashReportService */
  ICrashReportService: ICrashReportService;
  /** Interface endpoints for ICredentialsService */
  ICredentialsService: ICredentialsService;
  /** Interface endpoints for IDOTA2AutomatedTourney_2305270 */
  IDOTA2AutomatedTourney_2305270: IDOTA2AutomatedTourney_2305270;
  /** Interface endpoints for IDOTA2AutomatedTourney_247040 */
  IDOTA2AutomatedTourney_247040: IDOTA2AutomatedTourney_247040;
  /** Interface endpoints for IDOTA2AutomatedTourney_570 */
  IDOTA2AutomatedTourney_570: IDOTA2AutomatedTourney_570;
  /** Interface endpoints for IDOTA2CustomGames_2305270 */
  IDOTA2CustomGames_2305270: IDOTA2CustomGames_2305270;
  /** Interface endpoints for IDOTA2CustomGames_247040 */
  IDOTA2CustomGames_247040: IDOTA2CustomGames_247040;
  /** Interface endpoints for IDOTA2CustomGames_570 */
  IDOTA2CustomGames_570: IDOTA2CustomGames_570;
  /** Interface endpoints for IDOTA2Events_2305270 */
  IDOTA2Events_2305270: IDOTA2Events_2305270;
  /** Interface endpoints for IDOTA2Events_247040 */
  IDOTA2Events_247040: IDOTA2Events_247040;
  /** Interface endpoints for IDOTA2Events_570 */
  IDOTA2Events_570: IDOTA2Events_570;
  /** Interface endpoints for IDOTA2Fantasy_2305270 */
  IDOTA2Fantasy_2305270: IDOTA2Fantasy_2305270;
  /** Interface endpoints for IDOTA2Fantasy_247040 */
  IDOTA2Fantasy_247040: IDOTA2Fantasy_247040;
  /** Interface endpoints for IDOTA2Fantasy_570 */
  IDOTA2Fantasy_570: IDOTA2Fantasy_570;
  /** Interface endpoints for IDOTA2Guild_2305270 */
  IDOTA2Guild_2305270: IDOTA2Guild_2305270;
  /** Interface endpoints for IDOTA2Guild_247040 */
  IDOTA2Guild_247040: IDOTA2Guild_247040;
  /** Interface endpoints for IDOTA2Guild_570 */
  IDOTA2Guild_570: IDOTA2Guild_570;
  /** Interface endpoints for IDOTA2League_2305270 */
  IDOTA2League_2305270: IDOTA2League_2305270;
  /** Interface endpoints for IDOTA2League_247040 */
  IDOTA2League_247040: IDOTA2League_247040;
  /** Interface endpoints for IDOTA2League_570 */
  IDOTA2League_570: IDOTA2League_570;
  /** Interface endpoints for IDOTA2MatchStats_247040 */
  IDOTA2MatchStats_247040: IDOTA2MatchStats_247040;
  /** Interface endpoints for IDOTA2MatchStats_570 */
  IDOTA2MatchStats_570: IDOTA2MatchStats_570;
  /** Interface endpoints for IDOTA2Match_247040 */
  IDOTA2Match_247040: IDOTA2Match_247040;
  /** Interface endpoints for IDOTA2Match_570 */
  IDOTA2Match_570: IDOTA2Match_570;
  /** Interface endpoints for IDOTA2Operations_2305270 */
  IDOTA2Operations_2305270: IDOTA2Operations_2305270;
  /** Interface endpoints for IDOTA2Operations_247040 */
  IDOTA2Operations_247040: IDOTA2Operations_247040;
  /** Interface endpoints for IDOTA2Operations_570 */
  IDOTA2Operations_570: IDOTA2Operations_570;
  /** Interface endpoints for IDOTA2Plus_2305270 */
  IDOTA2Plus_2305270: IDOTA2Plus_2305270;
  /** Interface endpoints for IDOTA2Plus_247040 */
  IDOTA2Plus_247040: IDOTA2Plus_247040;
  /** Interface endpoints for IDOTA2Plus_570 */
  IDOTA2Plus_570: IDOTA2Plus_570;
  /** Interface endpoints for IDOTA2StreamSystem_247040 */
  IDOTA2StreamSystem_247040: IDOTA2StreamSystem_247040;
  /** Interface endpoints for IDOTA2StreamSystem_570 */
  IDOTA2StreamSystem_570: IDOTA2StreamSystem_570;
  /** Interface endpoints for IDOTA2Teams_2305270 */
  IDOTA2Teams_2305270: IDOTA2Teams_2305270;
  /** Interface endpoints for IDOTA2Teams_247040 */
  IDOTA2Teams_247040: IDOTA2Teams_247040;
  /** Interface endpoints for IDOTA2Teams_570 */
  IDOTA2Teams_570: IDOTA2Teams_570;
  /** Interface endpoints for IDOTA2Ticket_247040 */
  IDOTA2Ticket_247040: IDOTA2Ticket_247040;
  /** Interface endpoints for IDOTA2Ticket_570 */
  IDOTA2Ticket_570: IDOTA2Ticket_570;
  /** Interface endpoints for IDOTAChat_2305270 */
  IDOTAChat_2305270: IDOTAChat_2305270;
  /** Interface endpoints for IDOTAChat_247040 */
  IDOTAChat_247040: IDOTAChat_247040;
  /** Interface endpoints for IDOTAChat_570 */
  IDOTAChat_570: IDOTAChat_570;
  /** Interface endpoints for IDailyDealService */
  IDailyDealService: IDailyDealService;
  /** Interface endpoints for IDataPublisherService */
  IDataPublisherService: IDataPublisherService;
  /** Interface endpoints for IEconDOTA2_247040 */
  IEconDOTA2_247040: IEconDOTA2_247040;
  /** Interface endpoints for IEconDOTA2_570 */
  IEconDOTA2_570: IEconDOTA2_570;
  /** Interface endpoints for IEconItems_1046930 */
  IEconItems_1046930: IEconItems_1046930;
  /** Interface endpoints for IEconItems_1269260 */
  IEconItems_1269260: IEconItems_1269260;
  /** Interface endpoints for IEconItems_247040 */
  IEconItems_247040: IEconItems_247040;
  /** Interface endpoints for IEconItems_440 */
  IEconItems_440: IEconItems_440;
  /** Interface endpoints for IEconItems_570 */
  IEconItems_570: IEconItems_570;
  /** Interface endpoints for IEconItems_583950 */
  IEconItems_583950: IEconItems_583950;
  /** Interface endpoints for IEconItems_620 */
  IEconItems_620: IEconItems_620;
  /** Interface endpoints for IEconItems_730 */
  IEconItems_730: IEconItems_730;
  /** Interface endpoints for IEconMarketService */
  IEconMarketService: IEconMarketService;
  /** Interface endpoints for IEconService */
  IEconService: IEconService;
  /** Interface endpoints for IEmbeddedClientService */
  IEmbeddedClientService: IEmbeddedClientService;
  /** Interface endpoints for IFamilyGroupsService */
  IFamilyGroupsService: IFamilyGroupsService;
  /** Interface endpoints for IForumsService */
  IForumsService: IForumsService;
  /** Interface endpoints for IFriendMessagesService */
  IFriendMessagesService: IFriendMessagesService;
  /** Interface endpoints for IFriendsListService */
  IFriendsListService: IFriendsListService;
  /** Interface endpoints for IGCVersion_1046930 */
  IGCVersion_1046930: IGCVersion_1046930;
  /** Interface endpoints for IGCVersion_1269260 */
  IGCVersion_1269260: IGCVersion_1269260;
  /** Interface endpoints for IGCVersion_1422450 */
  IGCVersion_1422450: IGCVersion_1422450;
  /** Interface endpoints for IGCVersion_2305270 */
  IGCVersion_2305270: IGCVersion_2305270;
  /** Interface endpoints for IGCVersion_247040 */
  IGCVersion_247040: IGCVersion_247040;
  /** Interface endpoints for IGCVersion_3488080 */
  IGCVersion_3488080: IGCVersion_3488080;
  /** Interface endpoints for IGCVersion_3781850 */
  IGCVersion_3781850: IGCVersion_3781850;
  /** Interface endpoints for IGCVersion_440 */
  IGCVersion_440: IGCVersion_440;
  /** Interface endpoints for IGCVersion_570 */
  IGCVersion_570: IGCVersion_570;
  /** Interface endpoints for IGCVersion_583950 */
  IGCVersion_583950: IGCVersion_583950;
  /** Interface endpoints for IGCVersion_730 */
  IGCVersion_730: IGCVersion_730;
  /** Interface endpoints for IGameCoordinator */
  IGameCoordinator: IGameCoordinator;
  /** Interface endpoints for IGameInventory */
  IGameInventory: IGameInventory;
  /** Interface endpoints for IGameNotificationsService */
  IGameNotificationsService: IGameNotificationsService;
  /** Interface endpoints for IGamePerformanceStatsService */
  IGamePerformanceStatsService: IGamePerformanceStatsService;
  /** Interface endpoints for IGameRecordingClipService */
  IGameRecordingClipService: IGameRecordingClipService;
  /** Interface endpoints for IGameServersService */
  IGameServersService: IGameServersService;
  /** Interface endpoints for IHardwareTeamService */
  IHardwareTeamService: IHardwareTeamService;
  /** Interface endpoints for IHelpRequestLogsService */
  IHelpRequestLogsService: IHelpRequestLogsService;
  /** Interface endpoints for IInventoryService */
  IInventoryService: IInventoryService;
  /** Interface endpoints for ILobbyMatchmakingService */
  ILobbyMatchmakingService: ILobbyMatchmakingService;
  /** Interface endpoints for ILoyaltyRewardsService */
  ILoyaltyRewardsService: ILoyaltyRewardsService;
  /** Interface endpoints for IMarketingMessagesService */
  IMarketingMessagesService: IMarketingMessagesService;
  /** Interface endpoints for IMobileAppService */
  IMobileAppService: IMobileAppService;
  /** Interface endpoints for IMobileAuthService */
  IMobileAuthService: IMobileAuthService;
  /** Interface endpoints for IMobileDeviceService */
  IMobileDeviceService: IMobileDeviceService;
  /** Interface endpoints for IMobileNotificationService */
  IMobileNotificationService: IMobileNotificationService;
  /** Interface endpoints for INewsService */
  INewsService: INewsService;
  /** Interface endpoints for IOnlinePlayService */
  IOnlinePlayService: IOnlinePlayService;
  /** Interface endpoints for IParentalService */
  IParentalService: IParentalService;
  /** Interface endpoints for IPartnerAppNotesService */
  IPartnerAppNotesService: IPartnerAppNotesService;
  /** Interface endpoints for IPartnerDeadlineService */
  IPartnerDeadlineService: IPartnerDeadlineService;
  /** Interface endpoints for IPartnerDismissService */
  IPartnerDismissService: IPartnerDismissService;
  /** Interface endpoints for IPartnerFinancialsService */
  IPartnerFinancialsService: IPartnerFinancialsService;
  /** Interface endpoints for IPartnerMeetSteamService */
  IPartnerMeetSteamService: IPartnerMeetSteamService;
  /** Interface endpoints for IPartnerMembershipInviteService */
  IPartnerMembershipInviteService: IPartnerMembershipInviteService;
  /** Interface endpoints for IPartnerStoreBrowseService */
  IPartnerStoreBrowseService: IPartnerStoreBrowseService;
  /** Interface endpoints for IPhoneService */
  IPhoneService: IPhoneService;
  /** Interface endpoints for IPhysicalGoodsService */
  IPhysicalGoodsService: IPhysicalGoodsService;
  /** Interface endpoints for IPlayerService */
  IPlayerService: IPlayerService;
  /** Interface endpoints for IPlaytestService */
  IPlaytestService: IPlaytestService;
  /** Interface endpoints for IPortal2Leaderboards_620 */
  IPortal2Leaderboards_620: IPortal2Leaderboards_620;
  /** Interface endpoints for IProductInfoService */
  IProductInfoService: IProductInfoService;
  /** Interface endpoints for IPromotionEventInvitesService */
  IPromotionEventInvitesService: IPromotionEventInvitesService;
  /** Interface endpoints for IPromotionPlanningService */
  IPromotionPlanningService: IPromotionPlanningService;
  /** Interface endpoints for IPromotionStatsService */
  IPromotionStatsService: IPromotionStatsService;
  /** Interface endpoints for IPublishedFileModerationService */
  IPublishedFileModerationService: IPublishedFileModerationService;
  /** Interface endpoints for IPublishedFileService */
  IPublishedFileService: IPublishedFileService;
  /** Interface endpoints for IPublishingService */
  IPublishingService: IPublishingService;
  /** Interface endpoints for IQuestService */
  IQuestService: IQuestService;
  /** Interface endpoints for IRemoteClientService */
  IRemoteClientService: IRemoteClientService;
  /** Interface endpoints for ISaleFeatureService */
  ISaleFeatureService: ISaleFeatureService;
  /** Interface endpoints for ISaleItemRewardsService */
  ISaleItemRewardsService: ISaleItemRewardsService;
  /** Interface endpoints for IShoppingCartService */
  IShoppingCartService: IShoppingCartService;
  /** Interface endpoints for ISiteLicenseService */
  ISiteLicenseService: ISiteLicenseService;
  /** Interface endpoints for ISteamApps */
  ISteamApps: ISteamApps;
  /** Interface endpoints for ISteamAwardsService */
  ISteamAwardsService: ISteamAwardsService;
  /** Interface endpoints for ISteamBitPay */
  ISteamBitPay: ISteamBitPay;
  /** Interface endpoints for ISteamBoaCompra */
  ISteamBoaCompra: ISteamBoaCompra;
  /** Interface endpoints for ISteamBroadcast */
  ISteamBroadcast: ISteamBroadcast;
  /** Interface endpoints for ISteamCDN */
  ISteamCDN: ISteamCDN;
  /** Interface endpoints for ISteamChartsService */
  ISteamChartsService: ISteamChartsService;
  /** Interface endpoints for ISteamCloudGaming */
  ISteamCloudGaming: ISteamCloudGaming;
  /** Interface endpoints for ISteamCommunity */
  ISteamCommunity: ISteamCommunity;
  /** Interface endpoints for ISteamDirectory */
  ISteamDirectory: ISteamDirectory;
  /** Interface endpoints for ISteamEconomy */
  ISteamEconomy: ISteamEconomy;
  /** Interface endpoints for ISteamEnvoy */
  ISteamEnvoy: ISteamEnvoy;
  /** Interface endpoints for ISteamGPTRenderFarmService */
  ISteamGPTRenderFarmService: ISteamGPTRenderFarmService;
  /** Interface endpoints for ISteamGPTService */
  ISteamGPTService: ISteamGPTService;
  /** Interface endpoints for ISteamGameServerStats */
  ISteamGameServerStats: ISteamGameServerStats;
  /** Interface endpoints for ISteamLeaderboards */
  ISteamLeaderboards: ISteamLeaderboards;
  /** Interface endpoints for ISteamLearnService */
  ISteamLearnService: ISteamLearnService;
  /** Interface endpoints for ISteamMLService */
  ISteamMLService: ISteamMLService;
  /** Interface endpoints for ISteamMicroTxn */
  ISteamMicroTxn: ISteamMicroTxn;
  /** Interface endpoints for ISteamMicroTxnSandbox */
  ISteamMicroTxnSandbox: ISteamMicroTxnSandbox;
  /** Interface endpoints for ISteamNews */
  ISteamNews: ISteamNews;
  /** Interface endpoints for ISteamNodwin */
  ISteamNodwin: ISteamNodwin;
  /** Interface endpoints for ISteamNotificationService */
  ISteamNotificationService: ISteamNotificationService;
  /** Interface endpoints for ISteamPayPalPaymentsHub */
  ISteamPayPalPaymentsHub: ISteamPayPalPaymentsHub;
  /** Interface endpoints for ISteamPublishedItemSearch */
  ISteamPublishedItemSearch: ISteamPublishedItemSearch;
  /** Interface endpoints for ISteamPublishedItemVoting */
  ISteamPublishedItemVoting: ISteamPublishedItemVoting;
  /** Interface endpoints for ISteamRemoteStorage */
  ISteamRemoteStorage: ISteamRemoteStorage;
  /** Interface endpoints for ISteamSpecialSurvey */
  ISteamSpecialSurvey: ISteamSpecialSurvey;
  /** Interface endpoints for ISteamTVService */
  ISteamTVService: ISteamTVService;
  /** Interface endpoints for ISteamUser */
  ISteamUser: ISteamUser;
  /** Interface endpoints for ISteamUserAuth */
  ISteamUserAuth: ISteamUserAuth;
  /** Interface endpoints for ISteamUserOAuth */
  ISteamUserOAuth: ISteamUserOAuth;
  /** Interface endpoints for ISteamUserStats */
  ISteamUserStats: ISteamUserStats;
  /** Interface endpoints for ISteamWebAPIUtil */
  ISteamWebAPIUtil: ISteamWebAPIUtil;
  /** Interface endpoints for ISteamWorkshop */
  ISteamWorkshop: ISteamWorkshop;
  /** Interface endpoints for IStoreAppSimilarityService */
  IStoreAppSimilarityService: IStoreAppSimilarityService;
  /** Interface endpoints for IStoreBrowseService */
  IStoreBrowseService: IStoreBrowseService;
  /** Interface endpoints for IStoreCatalogService */
  IStoreCatalogService: IStoreCatalogService;
  /** Interface endpoints for IStoreCurationService */
  IStoreCurationService: IStoreCurationService;
  /** Interface endpoints for IStoreMarketingService */
  IStoreMarketingService: IStoreMarketingService;
  /** Interface endpoints for IStorePreferencesService */
  IStorePreferencesService: IStorePreferencesService;
  /** Interface endpoints for IStoreQueryService */
  IStoreQueryService: IStoreQueryService;
  /** Interface endpoints for IStoreSalesService */
  IStoreSalesService: IStoreSalesService;
  /** Interface endpoints for IStoreService */
  IStoreService: IStoreService;
  /** Interface endpoints for IStoreTopSellersService */
  IStoreTopSellersService: IStoreTopSellersService;
  /** Interface endpoints for ISupportAgentsService */
  ISupportAgentsService: ISupportAgentsService;
  /** Interface endpoints for ISupportService */
  ISupportService: ISupportService;
  /** Interface endpoints for ITFItems_440 */
  ITFItems_440: ITFItems_440;
  /** Interface endpoints for ITFPromos_440 */
  ITFPromos_440: ITFPromos_440;
  /** Interface endpoints for ITFPromos_620 */
  ITFPromos_620: ITFPromos_620;
  /** Interface endpoints for ITFSystem_440 */
  ITFSystem_440: ITFSystem_440;
  /** Interface endpoints for ITestExternalPrivilegeService */
  ITestExternalPrivilegeService: ITestExternalPrivilegeService;
  /** Interface endpoints for ITestService */
  ITestService: ITestService;
  /** Interface endpoints for ITrustService */
  ITrustService: ITrustService;
  /** Interface endpoints for ITwoFactorService */
  ITwoFactorService: ITwoFactorService;
  /** Interface endpoints for IUserAccountService */
  IUserAccountService: IUserAccountService;
  /** Interface endpoints for IUserGameNotesService */
  IUserGameNotesService: IUserGameNotesService;
  /** Interface endpoints for IUserReviewsService */
  IUserReviewsService: IUserReviewsService;
  /** Interface endpoints for IUserStoreVisitService */
  IUserStoreVisitService: IUserStoreVisitService;
  /** Interface endpoints for IVACManagementService */
  IVACManagementService: IVACManagementService;
  /** Interface endpoints for IVideoService */
  IVideoService: IVideoService;
  /** Interface endpoints for IWishlistService */
  IWishlistService: IWishlistService;
  /** Interface endpoints for IWorkshopService */
  IWorkshopService: IWorkshopService;

  /** Fallback index signature for dynamic access to undocumented interfaces */
  [interfaceName: string]: any;
}
