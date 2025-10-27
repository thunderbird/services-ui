import '@/assets/styles/main.css';

// Badges
import BaseBadge from '@/components/BaseBadge.vue';
import ExpiryBadge from '@/components/ExpiryBadge.vue';

// Buttons
import BaseButton from '@/components/BaseButton.vue';
import BrandButton from '@/components/BrandButton.vue';
import DangerButton from '@/components/DangerButton.vue';
import LinkButton from '@/components/LinkButton.vue';
import PrimaryButton from '@/components/PrimaryButton.vue';

// Inputs
import BubbleSelect from '@/components/BubbleSelect.vue';
import CheckboxInput from '@/components/CheckboxInput.vue';
import SelectInput from '@/components/SelectInput.vue';
import SwitchToggle from '@/components/SwitchToggle.vue';
import SyncCard from '@/components/SyncCard.vue';
import TextArea from '@/components/TextArea.vue';
import TextInput from '@/components/TextInput.vue';
import SegmentedControl from '@/components/SegmentedControl.vue';

// Misc
import LoadingSkeleton from '@/components/LoadingSkeleton.vue';
import NoticeBar from '@/components/NoticeBar.vue';
import ToolTip from '@/components/ToolTip.vue';
import UserAvatar from '@/components/UserAvatar.vue';
import VisualDivider from '@/components/VisualDivider.vue';

// Foundational items
import CopyIcon from '@/foundation/CopyIcon.vue';
import NoticeCriticalIcon from '@/foundation/NoticeCriticalIcon.vue';
import NoticeInfoIcon from '@/foundation/NoticeInfoIcon.vue';
import NoticeSuccessIcon from '@/foundation/NoticeSuccessIcon.vue';
import NoticeWarningIcon from '@/foundation/NoticeWarningIcon.vue';
import RefreshIcon from '@/foundation/RefreshIcon.vue';
import StatusExpiryIcon from '@/foundation/StatusExpiryIcon.vue';
import StatusInfoIcon from '@/foundation/StatusInfoIcon.vue';
import StatusWarningIcon from '@/foundation/StatusWarningIcon.vue';

// Types
import { ExpiryUnitTypes, NoticeBarTypes, BaseBadgeTypes } from '@/definitions';

// Patterns
import StandardFooter from '@/patterns/StandardFooter.vue';
import CopyToClipboard from './patterns/CopyToClipboard.vue';

export {
  // Badges
  BaseBadge,
  ExpiryBadge,
  // Buttons
  BaseButton,
  BrandButton,
  DangerButton,
  LinkButton,
  PrimaryButton,
  // Inputs
  BubbleSelect,
  CheckboxInput,
  SegmentedControl,
  SelectInput,
  SwitchToggle,
  SyncCard,
  TextArea,
  TextInput,
  // Misc
  LoadingSkeleton,
  NoticeBar,
  ToolTip,
  UserAvatar,
  VisualDivider,
  // Foundational items
  CopyIcon,
  NoticeCriticalIcon,
  NoticeInfoIcon,
  NoticeSuccessIcon,
  NoticeWarningIcon,
  RefreshIcon,
  StatusExpiryIcon,
  StatusInfoIcon,
  StatusWarningIcon,
  // Types
  ExpiryUnitTypes,
  NoticeBarTypes,
  BaseBadgeTypes,
  // Patterns
  CopyToClipboard,
  StandardFooter,
};
