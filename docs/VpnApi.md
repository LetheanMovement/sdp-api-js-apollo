# @LetheanSdpApollo.VpnApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**startLetheand**](VpnApi.md#startLetheand) | **GET** /letheand/start | 



## startLetheand

> startLetheand(dataDir, opts)



### Example

```javascript
import @LetheanSdpApollo from '@lethean/sdp-apollo';

let apiInstance = new @LetheanSdpApollo.VpnApi();
let dataDir = "dataDir_example"; // String | Returns the binary version
let opts = {
  'version': true // Boolean | Returns the binary version
};
apiInstance.startLetheand(dataDir, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dataDir** | **String**| Returns the binary version | 
 **version** | **Boolean**| Returns the binary version | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined

