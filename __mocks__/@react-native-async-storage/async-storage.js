import asyncStorageMock from '@react-native-async-storage/async-storage/jest/async-storage-mock';

const originalSetItemMock = asyncStorageMock.setItem.bind(asyncStorageMock);
asyncStorageMock.setItem = function newSetItemMock() {
  // Types falsely assert that the below mock function returns a promise, so we ignore the return value.
  originalSetItemMock(...arguments);
  return Promise.resolve();
};
export default asyncStorageMock;
