import NetInfo from '@react-native-community/netinfo';

const checkNetwork = async () => {
  const response = await NetInfo.fetch();
  return response.isConnected;
};

export default checkNetwork;
