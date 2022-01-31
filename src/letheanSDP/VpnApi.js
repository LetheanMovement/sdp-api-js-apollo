/**
 * Lethean Binary API
 * Functionality to simplify using LTHN
 *
 * The version of the OpenAPI document: 1.2.2
 * Contact: contact@lethean.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */



import ApiClient from "../ApiClient";

/**
* Vpn service.
* @module letheanSDP/VpnApi
* @version 1.2.2
*/
export default class VpnApi extends ApiClient {

    /**
    * Constructs a new VpnApi. 
    * @alias module:letheanSDP/VpnApi
    * @class
    */
    constructor() {
      super();
      this.baseURL = null;
    }


    /**
     * @param {String} dataDir Returns the binary version
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.version Returns the binary version
     * @return {Promise}
     */
    async startLetheand(dataDir, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'dataDir' is set
      if (dataDir === undefined || dataDir === null) {
        throw new Error("Missing the required parameter 'dataDir' when calling startLetheand");
      }

      let pathParams = {
      };
      let queryParams = {
        'version': opts['version'],
        'data_dir': dataDir
      };
      let headerParams = {
        'User-Agent': 'OpenAPI-Generator/1.2.2/Javascript',
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.callApi(
        '/letheand/start', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


}
