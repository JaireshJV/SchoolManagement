import CryptoJS from 'crypto-js';

const SECRET_KEY = 'endless';

// Basic encryption/decryption
export const encryptValue = (value) => {
  return CryptoJS.AES.encrypt(String(value), SECRET_KEY).toString();
};

export const decryptValue = (encrypted) => {
  try {
    const bytes = CryptoJS.AES.decrypt(encrypted, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return '';
  }
};

// Company ID functions
export const getDecryptedCompanyId = () => {
  const encrypted = localStorage.getItem('selectedCompanyId');
  const decrypted = encrypted ? decryptValue(encrypted) : null;
  if (!decrypted) {
    localStorage.removeItem('selectedCompanyId');
    return null;
  }
  return decrypted;
};

export const removeSelectedCompanyId = () => {
  localStorage.removeItem('selectedCompanyId');
};

// Country functions
export const setEncryptedCountry = (countryData) => {
  try {
    const jsonString = JSON.stringify(countryData);
    const encrypted = encryptValue(jsonString);
    localStorage.setItem('selectedCountry', encrypted);
    return true;
  } catch (e) {
    console.error('Error encrypting country data:', e);
    return false;
  }
};

export const getDecryptedCountry = () => {
  try {
    const encrypted = localStorage.getItem('selectedCountry');
    if (!encrypted) return null;
    
    const decrypted = decryptValue(encrypted);
    if (!decrypted) {
      localStorage.removeItem('selectedCountry');
      return null;
    }
    
    return JSON.parse(decrypted);
  } catch (e) {
    console.error('Error decrypting country data:', e);
    localStorage.removeItem('selectedCountry');
    return null;
  }
};

export const removeSelectedCountry = () => {
  localStorage.removeItem('selectedCountry');
};

// Language functions
export const setEncryptedLanguage = (languageData) => {
  try {
    const jsonString = JSON.stringify(languageData);
    const encrypted = encryptValue(jsonString);
    localStorage.setItem('selectedLanguage', encrypted);
    return true;
  } catch (e) {
    console.error('Error encrypting language data:', e);
    return false;
  }
};

export const getDecryptedLanguage = () => {
  try {
    const encrypted = localStorage.getItem('selectedLanguage');
    if (!encrypted) return null;
    
    const decrypted = decryptValue(encrypted);
    if (!decrypted) {
      localStorage.removeItem('selectedLanguage');
      return null;
    }
    
    return JSON.parse(decrypted);
  } catch (e) {
    console.error('Error decrypting language data:', e);
    localStorage.removeItem('selectedLanguage');
    return null;
  }
};

export const removeSelectedLanguage = () => {
  localStorage.removeItem('selectedLanguage');
};

// Clear all encrypted data
export const clearAllEncryptedData = () => {
  removeSelectedCompanyId();
  removeSelectedCountry();
  removeSelectedLanguage();
};