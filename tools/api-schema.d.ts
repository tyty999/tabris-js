/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type TabrisJsApiDefinitionJsonSchema = Api;
export type TypeReference =
  | string
  | {
      interface: string;
      generics: Generics;
    }
  | {
      union: TypeReference[];
    }
  | {
      tuple: TypeReference[];
    }
  | {
      map: {
        [k: string]: Property;
      };
    }
  | {
      map: {
        [k: string]: TypeReference;
      };
      indexType: "string" | "number" | "SelectorString";
    }
  | {
      callback: {
        type: TypeReference;
        name: string;
      }[];
      returns?: {
        type: TypeReference;
        name?: string;
      };
    };
export type Generics = TypeReference[];
export type Links = (Link | Snippet)[];
export type GenericsDef = {
  name: string;
  default?: TypeReference;
  extends?: TypeReference;
  description?: string;
}[];

export interface Api {
  category: "core" | "service" | "widget" | "popup" | "net" | "data";
  /**
   * The title of the document. Will default to object or type name.
   */
  title?: string;
  description?: string;
  namespace?: "global" | "tabris" | false;
  module?: "tabris" | "tabris-decorators";
  markdown_only?: boolean;
  /**
   * Name of the class/interface
   */
  type?: string;
  jsxChildren?: string[];
  /**
   * Makes this type an interface. Will be rendered inline where referenced in documentation.
   */
  interface?: boolean;
  /**
   * Name of the instance (for singletons)
   */
  object?: string;
  extends?: TypeReference;
  generics?: GenericsDef;
  constructor?: {
    access: "public" | "protected" | "private";
    parameters?: Parameter[];
  };
  /**
   * Change events will be generated automatically if type extends NativeObject
   */
  properties?: {
    [k: string]: Property;
  };
  methods?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "(^[_\$]?[a-z]\w+$)|(^\[.*\]$|^\$$)".
     */
    [k: string]: Method | Method[];
  };
  events?: {
    [k: string]: Event;
  };
  statics?: Statics;
  links?: Links;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "(^[_\$]?[a-z]\w+$)|(^\[.*\]$)".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^_?[a-z]\w+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "(^_?[a-z]\w+$)|(^\[.*\]$)".
 */
export interface Property {
  description?: string;
  changeEventDescription?: string;
  type: TypeReference;
  /**
   * Overrides "type" for TypeScript declarations
   */
  ts_type?:
    | string
    | {
        interface: string;
        generics: Generics;
      }
    | {
        union: TypeReference[];
      }
    | {
        tuple: TypeReference[];
      }
    | {
        map: {
          [k: string]: Property;
        };
      }
    | {
        map: {
          [k: string]: TypeReference;
        };
        indexType: "string" | "number" | "SelectorString";
      }
    | {
        callback: {
          type: TypeReference;
          name: string;
        }[];
        returns?: {
          type: TypeReference;
          name?: string;
        };
      };
  /**
   * Exclude this property from documentation
   */
  ts_only?: boolean;
  /**
   * Mark property as protected
   */
  protected?: boolean;
  /**
   * Is the property optional?
   */
  optional?: boolean;
  /**
   * Mark property as private
   */
  private?: boolean;
  /**
   * JSX child elements of the matching type are mapped to this property
   */
  jsxContentProperty?: boolean;
  platforms?: Platforms;
  /**
   * Indicates that this property can not be set. However, if the property is not a "const", it may change by itself. Defaults to false
   */
  readonly?: boolean;
  /**
   * Indicates that this property can not change during the lifetime of this object. However, if there is a public constructor and the property is not "readonly", it can be set via constructor. No change events will be generated for this property. Defaults to false
   */
  const?: boolean;
  /**
   * This property does not produce change events. Implied by 'const'.
   */
  noChangeEvent?: boolean;
  /**
   * Default value of this property
   */
  default?: {
    [k: string]: any;
  };
  /**
   * Limits the possible values of this property
   */
  values?: (string | number | boolean)[];
  links?: Links;
}
export interface Platforms {
  /**
   * Defaults to true
   */
  ios?: boolean;
  /**
   * Defaults to true
   */
  android?: boolean;
}
export interface Link {
  title: string;
  path: string;
}
export interface Snippet {
  title?: string;
  snippet: string;
  repo?: "tabris" | "tabris-decorators";
}
export interface Parameter {
  name: string;
  description?: string;
  type: TypeReference;
  /**
   * Overrides "type" for TypeScript declarations
   */
  ts_type?:
    | string
    | {
        interface: string;
        generics: Generics;
      }
    | {
        union: TypeReference[];
      }
    | {
        tuple: TypeReference[];
      }
    | {
        map: {
          [k: string]: Property;
        };
      }
    | {
        map: {
          [k: string]: TypeReference;
        };
        indexType: "string" | "number" | "SelectorString";
      }
    | {
        callback: {
          type: TypeReference;
          name: string;
        }[];
        returns?: {
          type: TypeReference;
          name?: string;
        };
      };
  /**
   * Defaults to false
   */
  optional?: boolean;
}
export interface Method {
  parameters?: Parameter[];
  returns?: TypeReference;
  docs_only?: boolean;
  ts_only?: boolean;
  /**
   * Overrides "returns" for TypeScript declarations
   */
  ts_returns?:
    | string
    | {
        interface: string;
        generics: Generics;
      }
    | {
        union: TypeReference[];
      }
    | {
        tuple: TypeReference[];
      }
    | {
        map: {
          [k: string]: Property;
        };
      }
    | {
        map: {
          [k: string]: TypeReference;
        };
        indexType: "string" | "number" | "SelectorString";
      }
    | {
        callback: {
          type: TypeReference;
          name: string;
        }[];
        returns?: {
          type: TypeReference;
          name?: string;
        };
      };
  description?: string;
  generics?: GenericsDef;
  platforms?: Platforms;
  protected?: boolean;
  private?: boolean;
  provisional?: boolean;
  links?: Links;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-z]\w+$".
 */
export interface Event {
  description?: string;
  /**
   * The name of the generated event object interface for TypeScript declaration. Defaults to "{TypeName}{EventName}Event". Useful for merging multiple identical event interfaces.
   */
  eventObject?: string;
  platforms?: Platforms;
  parameters?: {
    [k: string]: Property;
  };
  links?: Links;
}
export interface Statics {
  properties?: {
    [k: string]: Property;
  };
  methods?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "(^_?[a-z]\w+$)|(^\[.*\]$)".
     */
    [k: string]: Method | Method[];
  };
  [k: string]: any;
}
