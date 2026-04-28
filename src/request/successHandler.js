import { notification } from 'antd';
import codeMessage from '@request/codeMessage';

const successHandler = (
  response,
  options = { notifyOnSuccess: false, notifyOnFailed: true, msg: '', type: 'success' }
) => {
  const { data, status } = response;

  // -------------------------------
  // ✅ SUCCESS (HTTP 2xx)
  // -------------------------------
  if (status >= 200 && status < 300) {
    const message = data?.message;
    const successText = message || codeMessage[status] || 'Success';

    if (options.notifyOnSuccess) {
      notification.config({ duration: 3 });

      switch (options.type) {
        case 'success':
          return notification.success({
            message: options.msg || 'Success',
            description: successText,
          });

        case 'info':
          return notification.info({
            message: options.msg || 'Information',
            description: successText,
          });

        default:
          return notification.warning({
            message: options.msg || 'Warning',
            description: successText,
          });
      }
    }

    return; // success, but notifyOnSuccess = false
  }

  // -------------------------------
  // ❌ ERROR (HTTP 4xx, 5xx)
  // -------------------------------
  const errorMessage = data?.message;
  const errorText = errorMessage || codeMessage[status] || 'Request failed';

  if (options.notifyOnFailed) {
    notification.config({ duration: 3 });

    notification.error({
      message: `Request error ${status}`,
      description: errorText,
    });
  }
};

export default successHandler;
