import deprecated from "discourse-common/lib/deprecated";

export function needsSecondRowIf() {
  deprecated(
    "`needsSecondRowIf` is deprecated. Use widget hooks on `header-second-row`",
    { id: "discourse.header-extra-info.needs-second-row-if" }
  );
}
