import React, { Fragment } from "react";

import escapeHTML from "escape-html";

// DOM
export const DOM_ELEMENT_TYPE = 1;
export const DOM_TEXT_TYPE = 3;

// Reconciling
export const NO_DIRTY_NODES = 0;
export const HAS_DIRTY_NODES = 1;
export const FULL_RECONCILE = 2;

// Text node modes
export const IS_NORMAL = 0;
export const IS_TOKEN = 1;
export const IS_SEGMENTED = 2;
// IS_INERT = 3

// Text node formatting
export const IS_BOLD = 1;
export const IS_ITALIC = 1 << 1;
export const IS_STRIKETHROUGH = 1 << 2;
export const IS_UNDERLINE = 1 << 3;
export const IS_CODE = 1 << 4;
export const IS_SUBSCRIPT = 1 << 5;
export const IS_SUPERSCRIPT = 1 << 6;
export const IS_HIGHLIGHT = 1 << 7;

export const IS_ALL_FORMATTING =
  IS_BOLD |
  IS_ITALIC |
  IS_STRIKETHROUGH |
  IS_UNDERLINE |
  IS_CODE |
  IS_SUBSCRIPT |
  IS_SUPERSCRIPT |
  IS_HIGHLIGHT;

export const IS_DIRECTIONLESS = 1;
export const IS_UNMERGEABLE = 1 << 1;

// Element node formatting
export const IS_ALIGN_LEFT = 1;
export const IS_ALIGN_CENTER = 2;
export const IS_ALIGN_RIGHT = 3;
export const IS_ALIGN_JUSTIFY = 4;
export const IS_ALIGN_START = 5;
export const IS_ALIGN_END = 6;

export const TEXT_TYPE_TO_FORMAT: Record<TextFormatType | string, number> = {
  bold: IS_BOLD,
  code: IS_CODE,
  italic: IS_ITALIC,
  strikethrough: IS_STRIKETHROUGH,
  subscript: IS_SUBSCRIPT,
  superscript: IS_SUPERSCRIPT,
  underline: IS_UNDERLINE,
};

export type TextFormatType =
  | "bold"
  | "underline"
  | "strikethrough"
  | "italic"
  | "code"
  | "subscript"
  | "superscript";

export type SerializedLexicalEditorState = {
  root: {
    type: string;
    format: string;
    indent: number;
    version: number;
    children: SerializedLexicalNode[];
  };
};

export type SerializedLexicalNode = {
  children?: SerializedLexicalNode[];
  direction: string;
  format: number;
  indent?: string | number;
  type: string;
  version: number;
  style?: string;
  mode?: string;
  text?: string;
  [other: string]: any;
};

interface Props {
  nodes: SerializedLexicalNode[];
}

export function Serialize({ nodes }: Props): JSX.Element {
  return (
    <Fragment>
      {nodes?.map((node, index): JSX.Element | null => {
        if (node.type === "text") {
          let text = (
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: escapeHTML(node.text) }}
            />
          );
          if (node.format & IS_BOLD) {
            text = <strong key={index}>{text}</strong>;
          }
          if (node.format & IS_ITALIC) {
            text = <em key={index}>{text}</em>;
          }
          if (node.format & IS_STRIKETHROUGH) {
            text = (
              <span key={index} className="line-through">
                {text}
              </span>
            );
          }
          if (node.format & IS_UNDERLINE) {
            text = (
              <span key={index} className="underline">
                {text}
              </span>
            );
          }
          if (node.format & IS_CODE) {
            text = <code key={index}>{text}</code>;
          }
          if (node.format & IS_SUBSCRIPT) {
            text = <sub key={index}>{text}</sub>;
          }
          if (node.format & IS_SUPERSCRIPT) {
            text = <sup key={index}>{text}</sup>;
          }

          return text;
        }

        if (node == null) {
          return null;
        }

        // NOTE: Hacky fix for
        // https://github.com/facebook/lexical/blob/d10c4e6e55261b2fdd7d1845aed46151d0f06a8c/packages/lexical-list/src/LexicalListItemNode.ts#L133
        // which does not return checked: false (only true - i.e. there is no prop for false)
        const serializedChildrenFn = (
          node: SerializedLexicalNode,
        ): JSX.Element | null => {
          if (node.children == null) {
            return null;
          } else {
            if (node?.type === "list" && node?.listType === "check") {
              for (const item of node.children) {
                if (!item?.checked) {
                  item.checked = false;
                }
              }
              return Serialize({ nodes: node.children });
            } else {
              return Serialize({ nodes: node.children });
            }
          }
        };

        const serializedChildren = serializedChildrenFn(node);

        switch (node.type) {
          case "linebreak": {
            return <br key={index} />;
          }
          case "paragraph": {
            return <p key={index}>{serializedChildren}</p>;
          }
          case "heading": {
            type Heading = Extract<
              keyof JSX.IntrinsicElements,
              "h1" | "h2" | "h3" | "h4" | "h5"
            >;
            const Tag = node?.tag as Heading;
            console.log(node);
            return <Tag key={index}>{serializedChildren}</Tag>;
          }
          case "list": {
            type List = Extract<keyof JSX.IntrinsicElements, "ul" | "ol">;
            const Tag = node?.tag as List;
            return (
              <Tag key={index} className={node?.listType}>
                {serializedChildren}
              </Tag>
            );
          }
          case "listitem": {
            if (node?.checked != null) {
              return (
                <li
                  key={index}
                  className={`component--list-item-checkbox ${
                    node.checked
                      ? "component--list-item-checkbox-checked"
                      : "component--list-item-checked-unchecked"
                  }`}
                  value={node?.value}
                  role="checkbox"
                  aria-checked={node.checked ? "true" : "false"}
                  tabIndex={-1}
                >
                  {serializedChildren}
                </li>
              );
            } else {
              return (
                <li key={index} value={node?.value}>
                  {serializedChildren}
                </li>
              );
            }
          }
          case "quote": {
            return <blockquote key={index}>{serializedChildren}</blockquote>;
          }
          case "link": {
            const attributes: {
              doc?: any;
              linkType?: "custom" | "internal";
              newTab?: boolean;
              nofollow?: boolean;
              rel?: string;
              sponsored?: boolean;
              url?: string;
            } = node.fields;

            if (attributes.linkType === "custom") {
              const rel = `${attributes?.rel ?? ""} ${attributes?.nofollow ? " nofollow" : ""}`;
              return (
                <a
                  key={index}
                  href={attributes.url}
                  target={attributes.newTab ? 'target="_blank"' : undefined}
                  rel={rel}
                  className="text-badge-yellow hover:bg-badge-yellow hover:text-black"
                >
                  {serializedChildren}
                </a>
              );
            } else {
              return <span key={index}>Internal link coming soon</span>;
            }

            // TODO: internal links
            // return `<a href="${getLinkForPage(attributes.doc)}"${
            //   attributes.newTab ? ' target=_"blank"' : ''
            // } rel="${attributes?.rel ?? ''}${
            //   attributes?.sponsored ? ' sponsored' : ''
            // }${attributes?.nofollow ? ' nofollow' : ''}">${serializedChildren}</a>` // TODO: Check doc link handling
          }
          case "upload": {
            // TODO: inline-images based on InlineImagePlugin
            return (
              <img
                src={process.env.NEXT_PUBLIC_PAYLOAD_CMS + node.value.url}
                alt={""}
                width={node.value.width}
                height={node.value.height}
                className="rounded-2xl border border-white/10"
              />
            );
          }
          default:
            return null;
        }
      })}
    </Fragment>
  );
}
