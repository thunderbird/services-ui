//import { Dayjs } from 'dayjs';
//import { UseFetchReturn } from '@vueuse/core';
import {
  InviteStatus,
  WaitingListAction,
  EventLocationType,
  FtueStep,
  CalendarProviders,
  TableDataButtonType,
  TableDataType,
} from './definitions';

export type CustomEventData = {
  attendee?: Attendee;
  slot_status: number; // TODO: definitions.BookingStatus?
  booking_status: number; // TODO: definitions.BookingStatus
  calendar_title: string;
  calendar_color: string;
  duration: number;
  preview: boolean;
  all_day: boolean;
  remote: boolean;
  tentative: boolean;
};

export type CalendarEvent = {
  id: number|string;
  title: string;
  colorScheme: string;
  time?: TimeFormatted;
  description: string;
  with: string;
  customData: CustomEventData;
  isCustom?: boolean;
};

/**
 * Event location.
 * Corresponds to schemas.EventLocation
 */
export type EventLocation = {
  type: EventLocationType;
  suggestions?: string;
  selected?: string;
  name?: string;
  url?: string;
  phone?: string;
};

/**
 * Event from a remote calendar.
 * Corresponds to schemas.Event
 */
export type RemoteEvent = {
  title: string;
  start: string;
  end: string;
  all_day?: boolean;
  tentative?: boolean;
  description?: string;
  calendar_title?: string;
  calendar_color?: string;
  location?: EventLocation;
  uuid?: string;
  duration?: number;
};

export type EventPopup = {
  event?: CalendarEvent;
  display: string;
  top: string|number;
  left: string|number;
  right?: string|number;
  bottom?: string|number;
};

export type Calendar = {
  id?: number;
  connected: boolean;
  title: string;
  color: string;
  provider?: CalendarProviders;
  url?: string;
  user?: string;
};

export type CalendarItem = {
  key: number;
  label: string;
  checked: boolean;
};

export type ExternalConnection = {
  owner_id: number;
  name: string;
  type: string;
  type_id: string;
};

export type ExternalConnectionCollection = {
  fxa?: ExternalConnection[];
  google?: ExternalConnection[];
  zoom?: ExternalConnection[];
};

// The type `Availability` will be used later if we provide custom availabilities
// in addition to general availability too
export type Availability = {
  id?: number;
};

export type Schedule = {
  active: boolean;
  name: string;
  slug?: string;
  calendar_id: number;
  location_type: number;
  location_url: string;
  details: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  earliest_booking: number;
  farthest_booking: number;
  weekdays: number[];
  slot_duration: number;
  meeting_link_provider: string;
  id?: number;
  time_created?: string;
  time_updated?: string;
  availabilities?: Availability[];
  calendar?: Calendar;
  booking_confirmation: boolean;
};

export type Invite = {
  subscriber_id?: number;
  code: string;
  status: InviteStatus;
  time_created: string;
  time_updated: string;
};

export type User = {
  email: string;
  preferredEmail: string;
  level: number;
  name: string;
  timezone: string;
  username: string;
  signedUrl: string;
  avatarUrl: string;
  accessToken: string;
  scheduleLinks: string[];
  isSetup: boolean,
  uniqueHash: string;
};

export type Subscriber = {
  id?: number;
  username: string;
  name: string;
  email: string;
  preferred_email: string;
  level: number;
  timezone: string;
  avatar_url: string;
  is_setup: boolean;
  unique_hash: string;
  schedule_links: string[];
  secondary_email?: string;
  invite?: Invite;
  time_created?: string;
  time_deleted?: string;
}

export type WaitingListInvite = {
  accepted: number[];
  errors: string[]
}

export type WaitingListEntry = {
  id: number;
  email: string;
  email_verified: boolean;
  invite_id?: number;
  invite?: Invite;
  time_created?: string;
  time_updated?: string;
}

export type WaitingListStatus = {
  action: WaitingListAction;
  success: boolean;
  redirectToSettings?: boolean;
}

export type Signature = {
  url: string;
};

// Types for authentication and error handling
export type Error = {
  error: boolean|string|null;
  message?: string;
};
export type ExceptionDetail = {
  id?: string;
  message?: string;
  status?: number;
}
export type PydanticExceptionDetail = {
  ctx: { reason: string },
  input: string,
  loc: string[],
  msg: string,
  type: string
}
export type PydanticException = {
  detail?: PydanticExceptionDetail[];
}
export type Exception = {
  status_code?: number;
  detail?: ExceptionDetail | PydanticExceptionDetail[];
  headers?: any[];
};
export type Token = {
  access_token: string;
  token_type: string;
};
export type AuthUrl = {
  url: string;
};

// Table types
export type TableDataField = {
  type: TableDataType;
  value: string|number|boolean;
  link?: string;
  buttonType?: TableDataButtonType;
  disabled?: boolean;
};
export type TableDataRow = {
  [key:string]: TableDataField
};
export type TableDataColumn = {
  name: string;
  key: string;
};
export type TableFilterOption = {
  name: string;
  key: string;
};
export type TableFilter = {
  name: string;
  options: TableFilterOption[];
  fn: (value: string, list: TableDataRow[]) => TableDataRow[];
};

// First Time User Experience State
export type FtueState = {
  previous: FtueStep;
  next: FtueStep;
  title: string;
};

// Utility types
export type Time<T> = {
  start: T;
  end: T;
};
export type TimeNumeric = Time<number>;
export type TimeFormatted = Time<string>;

export type SelectOption = {
  label: string;
  fullLabel: string;
  value: any;
};

export type Coloring = {
  border?: string;
  background?: string;
};

export type HTMLElementEvent = Event & {
  target: HTMLElement;
  currentTarget: HTMLElement;
};
export type HTMLInputElementEvent = Event & {
  target: HTMLInputElement;
  currentTarget: HTMLInputElement;
};
