import { Editable, EditableInput, EditablePreview } from "@chakra-ui/react";
import PropTypes from "prop-types";
function EditableText({ value, employeeKey, id, handler }) {
  return (
    <Editable
      defaultValue={value}
      className="flex gap-2 items-center text-purple-600"
    >
      <EditablePreview />
      <EditableInput
        size="xs"
        data-key={employeeKey}
        data-id={id}
        onChange={handler}
        onBlur={handler}
      />
    </Editable>
  );
}
EditableText.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handler: PropTypes.func.isRequired,
  employeeKey: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default EditableText;
