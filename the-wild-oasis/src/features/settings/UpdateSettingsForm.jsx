import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSettings } from "./useSetings";
import Spinner from "../../ui/Spinner";
import { useUpdateSetting } from "./useUpdateSettings";

function UpdateSettingsForm() {
  const {
    isLoading,
    settings: {
      minimumBookingLength,
      maxBookingLength,
      maxGuestPerBookings,
      breakFastPrice,
    } = {},
  } = useSettings();
  const { updateSetting, isPendingUpdating } = useUpdateSetting();

  if (isLoading) return <Spinner />;

  function handleUpdate(e, field) {
    const { value } = e.target;
    if (!value) return;
    updateSetting({ [field]: value });
  }
  return (
    <Form>
      <FormRow label="Minimum nights/booking">
        <Input
          type="number"
          id="min-nights"
          disabled={isPendingUpdating}
          defaultValue={minimumBookingLength}
          onBlur={(e) => handleUpdate(e, "minimumBookingLength")}
        />
      </FormRow>
      <FormRow label="Maximum nights/booking">
        <Input
          type="number"
          id="max-nights"
          disabled={isPendingUpdating}
          onBlur={(e) => handleUpdate(e, "maxBookingLength")}
          defaultValue={maxBookingLength}
        />
      </FormRow>
      <FormRow label="Maximum guests/booking">
        <Input
          type="number"
          id="max-guests"
          disabled={isPendingUpdating}
          onBlur={(e) => handleUpdate(e, "maxGuestPerBookings")}
          defaultValue={maxGuestPerBookings}
        />
      </FormRow>
      <FormRow label="Breakfast price">
        <Input
          type="number"
          id="breakfast-price"
          disabled={isPendingUpdating}
          onBlur={(e) => handleUpdate(e, "breakFastPrice")}
          defaultValue={breakFastPrice}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
