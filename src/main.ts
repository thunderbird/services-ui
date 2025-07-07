import '@/assets/styles/main.css';

// Badges
import BaseBadge from "@/elements/BaseBadge.vue";
import PrimaryBadge from "@/elements/PrimaryBadge.vue";
import SecondaryBadge from "@/elements/SecondaryBadge.vue";
import WarningBadge from "@/elements/WarningBadge.vue";
import ExpiryBadge from "@/elements/ExpiryBadge.vue";

// Buttons
import BaseButton from "@/elements/BaseButton.vue";
import PrimaryButton from "@/elements/PrimaryButton.vue";
import SecondaryButton from "@/elements/SecondaryButton.vue";
import LinkButton from "@/elements/LinkButton.vue";

// Inputs
import SelectInput from "@/elements/SelectInput.vue";
import TextInput from "@/elements/TextInput.vue";
import BubbleSelect from "@/elements/BubbleSelect.vue";
import SyncCard from "@/elements/SyncCard.vue";
import SwitchToggle from "@/elements/SwitchToggle.vue";
import TextArea from '@/elements/TextArea.vue';
import CheckboxInput from '@/elements/CheckboxInput.vue';

// Misc
import NoticeBar from "@/elements/NoticeBar.vue";
import ToolTip from "@/elements/ToolTip.vue";

// Icons
import CopyIcon from "@/icons/CopyIcon.vue";
import NoticeInfoIcon from "@/icons/NoticeInfoIcon.vue";
import NoticeSuccessIcon from "@/icons/NoticeSuccessIcon.vue";
import NoticeWarningIcon from "@/icons/NoticeWarningIcon.vue";
import NoticeCriticalIcon from "@/icons/NoticeCriticalIcon.vue";
import StatusInfoIcon from './icons/StatusInfoIcon.vue';
import StatusWarningIcon from './icons/StatusWarningIcon.vue';
import StatusExpiryIcon from './icons/StatusExpiryIcon.vue';

// Types
import { ExpiryUnitTypes, NoticeBarTypes } from "./definitions";

export {
  BaseBadge,
  PrimaryBadge,
  SecondaryBadge,
  WarningBadge,
  CheckboxInput,
  ExpiryBadge,
  BaseButton,
  PrimaryButton,
  SecondaryButton,
  LinkButton,
  SelectInput,
  TextInput,
  TextArea,
  BubbleSelect,
  SyncCard,
  SwitchToggle,
  NoticeBar,
  ToolTip,
  // Icons
  CopyIcon,
  NoticeInfoIcon,
  NoticeSuccessIcon,
  NoticeWarningIcon,
  NoticeCriticalIcon,
  StatusInfoIcon,
  StatusWarningIcon,
  StatusExpiryIcon,
  // Types
  ExpiryUnitTypes,
  NoticeBarTypes,
};
