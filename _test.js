export const createOrderMessage = createAsyncThunk<
  {
    success: boolean;
    data: DBOrderMessage[] | null;
    error: { status?: number; message?: string } | null;
  },
  { message: string; orderId: string },
  {
    rejectValue: {
      success: boolean;
      data: DBOrderMessage[] | null;
      error: { status?: number; message?: string } | null;
    };
  }
>(
  `${sliceName}/createOrderMessage`,
  async (arg: { message: string; orderId: string }, { rejectWithValue }) => {
    const res
    const response: {
      success: boolean;
      data: DBOrderMessage[] | null;
      error: { status?: number; message?: string } | null;
    } = await ApiClient.Dashboard.createOrderMessage(arg.message, arg.orderId);
    if (response.error) {
      showErrorToast(response.error.message);
      return rejectWithValue(response);
    }
    showSuccessToast('Order message successfully created');
    return response;
  },
);

builder.addCase(createUserContact.fulfilled, (state, action) => {
    state.isLoading = false;
    const contact = action.payload.data;
    state.contactDetails = contact;
    state.errors.createUserContact = null;
  });
  builder.addCase(createUserContact.pending, (state) => {
    state.isLoading = true;
  });
  builder.addCase(createUserContact.rejected, (state, action) => {
    state.errors.createUserContact = action.payload.error;
    state.isLoading = false;
  });
