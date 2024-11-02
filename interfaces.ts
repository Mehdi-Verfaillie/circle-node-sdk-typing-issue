//  Note: I had to copy the interfaces from the SDK since the SDK does not export them.

export interface EndUser {
  id?: string;
  createDate?: string;
  pinStatus?: PinStatus;
  status?: EndUserStatus;
  securityQuestionStatus?: EndUserSecurityQuestionStatusEnum;
  pinDetails?: PinSecurityDetails;
  securityQuestionDetails?: PinSecurityDetails;
}

declare const PinStatus: {
  readonly Enabled: "ENABLED";
  readonly Unset: "UNSET";
  readonly Locked: "LOCKED";
};
type PinStatus = typeof PinStatus[keyof typeof PinStatus];

declare const EndUserStatus: {
  readonly Enabled: "ENABLED";
  readonly Disabled: "DISABLED";
};
type EndUserStatus = typeof EndUserStatus[keyof typeof EndUserStatus];

interface PinSecurityDetails {
  "failedAttempts"?: number;

  "lockedDate"?: string;

  "lockedExpiryDate"?: string;

  "lastLockOverrideDate"?: string;
}

declare const EndUserSecurityQuestionStatusEnum: {
  readonly Enabled: "ENABLED";
  readonly Unset: "UNSET";
  readonly Locked: "LOCKED";
};
type EndUserSecurityQuestionStatusEnum =
  typeof EndUserSecurityQuestionStatusEnum[
    keyof typeof EndUserSecurityQuestionStatusEnum
  ];
