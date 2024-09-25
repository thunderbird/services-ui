import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_2<T> = T extends undefined ? never : T;

declare type __VLS_NonUndefinedable_3<T> = T extends undefined ? never : T;

declare type __VLS_PrettifyLocal<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_2<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PrettifyLocal_3<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_PublicProps = {
    modelValue?: any;
} & typeof __VLS_typeProps;

declare type __VLS_PublicProps_2 = {
    modelValue?: string;
} & typeof __VLS_typeProps_2;

declare type __VLS_PublicProps_3 = {
    modelValue?: number[];
} & typeof __VLS_typeProps_3;

declare type __VLS_PublicProps_4 = {
    modelValue?: CalendarItem[];
} & typeof __VLS_typeProps_4;

declare let __VLS_typeProps: Props_2;

declare let __VLS_typeProps_2: Props_3;

declare let __VLS_typeProps_3: Props_4;

declare let __VLS_typeProps_4: Props_5;

declare type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_2<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_2<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_TypePropsToOption_3<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable_3<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_2<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_2<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithDefaults_3<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_PrettifyLocal_3<P[K] & {
        default: D[K];
    }> : P[K];
};

declare type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_10<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_2<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_3<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_4<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_5<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_6<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_7<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_8<T, S> = T & {
    new (): {
        $slots: S;
    };
};

declare type __VLS_WithTemplateSlots_9<T, S> = T & {
    new (): {
        $slots: S;
    };
};

export declare const BaseButton: __VLS_WithTemplateSlots<DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
type: string;
size: string;
tooltip: string;
forceTooltip: boolean;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (...args: any[]) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<Props>, {
type: string;
size: string;
tooltip: string;
forceTooltip: boolean;
}>>> & Readonly<{
onClick?: (...args: any[]) => any;
}>, {
type: string;
tooltip: string;
size: string;
forceTooltip: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    icon?(_: {}): any;
    default?(_: {}): any;
}>;

export declare const BubbleSelect: __VLS_WithTemplateSlots_7<DefineComponent<__VLS_PublicProps_3, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
click: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_PublicProps_3> & Readonly<{
onClick?: (...args: any[]) => any;
}>, {
required: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>, {
    default?(_: {}): any;
}>;

declare type CalendarItem = {
    key: number;
    label: string;
    checked: boolean;
};

export declare const CopyIcon: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const LinkButton: __VLS_WithTemplateSlots_4<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, Partial<Record<NonNullable<string | number>, (_: any) => any>>>;

export declare const NoticeBar: __VLS_WithTemplateSlots_9<DefineComponent<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToOption_2<Props_7>, {
type: NoticeBarTypes;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_2<__VLS_TypePropsToOption_2<Props_7>, {
type: NoticeBarTypes;
}>>> & Readonly<{}>, {
type: NoticeBarTypes;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;

declare enum NoticeBarTypes {
    Info = "info",
    Success = "success",
    Warning = "warning",
    Error = "error"
}

export declare const NoticeCriticalIcon: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const NoticeInfoIcon: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const NoticeSuccessIcon: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const NoticeWarningIcon: DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare const PrimaryButton: __VLS_WithTemplateSlots_2<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, Partial<Record<NonNullable<string | number>, (_: any) => any>>>;

declare interface Props {
    type?: string;
    size?: string;
    tooltip?: string;
    forceTooltip?: boolean;
}

declare interface Props_2 {
    name: string;
    options: SelectOption[];
    required?: boolean;
    disabled?: boolean;
}

declare interface Props_3 {
    name: string;
    help?: string;
    remoteError?: string;
    type?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
}

declare interface Props_4 {
    options: SelectOption[];
    required: boolean;
}

declare interface Props_5 {
    title: string;
}

declare interface Props_6 {
    name: string;
    active: boolean;
    disabled?: boolean;
    label?: string;
    noLegend?: boolean;
}

declare interface Props_7 {
    type?: NoticeBarTypes;
}

declare interface Props_8 {
    alt?: string;
    position?: TooltipPosition;
}

export declare const SecondaryButton: __VLS_WithTemplateSlots_3<DefineComponent<    {}, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, Partial<Record<NonNullable<string | number>, (_: any) => any>>>;

export declare const SelectInput: __VLS_WithTemplateSlots_5<DefineComponent<__VLS_PublicProps, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
submit: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_PublicProps> & Readonly<{
onSubmit?: (...args: any[]) => any;
}>, {
required: boolean;
disabled: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>, {
    default?(_: {}): any;
}>;

declare type SelectOption = {
    label: string;
    fullLabel?: string;
    value: any;
};

export declare const SwitchToggle: DefineComponent<Props_6, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
changed: (...args: any[]) => void;
}, string, PublicProps, Readonly<Props_6> & Readonly<{
onChanged?: (...args: any[]) => any;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>;

export declare const SyncCard: __VLS_WithTemplateSlots_8<DefineComponent<__VLS_PublicProps_4, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
"update:modelValue": (modelValue: CalendarItem[]) => any;
}, string, PublicProps, Readonly<__VLS_PublicProps_4> & Readonly<{
"onUpdate:modelValue"?: (modelValue: CalendarItem[]) => any;
}>, {}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>, {
    icon?(_: {}): any;
}>;

export declare const TextInput: __VLS_WithTemplateSlots_6<DefineComponent<__VLS_PublicProps_2, {
focus: () => void;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
submit: (...args: any[]) => void;
}, string, PublicProps, Readonly<__VLS_PublicProps_2> & Readonly<{
onSubmit?: (...args: any[]) => any;
}>, {
type: string;
required: boolean;
disabled: boolean;
help: string;
remoteError: string;
placeholder: string;
}, {}, {}, {}, string, ComponentProvideOptions, false, {}, any>, {
    default?(_: {}): any;
}>;

export declare const ToolTip: __VLS_WithTemplateSlots_10<DefineComponent<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToOption_3<Props_8>, {
alt: string;
position: TooltipPosition;
}>>, {}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults_3<__VLS_TypePropsToOption_3<Props_8>, {
alt: string;
position: TooltipPosition;
}>>> & Readonly<{}>, {
alt: string;
position: TooltipPosition;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;

declare enum TooltipPosition {
    None = "pos-none",
    Top = "pos-top",
    Bottom = "pos-bottom",
    Left = "pos-left",
    Right = "pos-right"
}

export { }
