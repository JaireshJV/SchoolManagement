import { notification } from 'antd';
import codeMessage from '@request/codeMessage';

const errorHandler = (error) => {
  const response = error?.response;

  // -------------------------------
  // ❌ SERVER ERROR (400–500)
  // -------------------------------
  if (response && response.status) {
    const message =
      response.data?.message ||
      response.data?.error ||
      (typeof response.data === 'string' ? response.data : null);

    const errorText =
      message || codeMessage[response.status] || 'Request failed';

    notification.config({ duration: 5 });

    notification.error({
      message: `Error ${response.status}`,
      description: errorText,
    });

    return {
      success: false,
      status: response.status,
      data: response.data,
      message: errorText,
    };
  }

  // -------------------------------
  // ❌ NETWORK ERROR / NO RESPONSE
  // -------------------------------
  notification.config({ duration: 5 });

  notification.error({
    message: 'Network Error',
    description: 'Cannot connect to the server. Check your internet connection.',
  });

  return {
    success: false,
    status: null,
    data: null,
    message:
      'Cannot connect to the server. Check your internet connection.',
  };
};

export default errorHandler;
