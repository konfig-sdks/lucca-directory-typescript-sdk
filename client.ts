/*
Directory-v3

Welcome on the documentation for the Directory v3 API.


The version of the OpenAPI document: 1.0
Contact: developers@lucca.fr

NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import { AxiosRequestConfig } from "axios";
import {
  UsersApi,
} from "./api";
import { Configuration, ConfigurationParameters } from "./configuration";
import { LuccaDirectoryCustom } from "./client-custom";

export class LuccaDirectory extends LuccaDirectoryCustom {
  readonly users: UsersApi;

  constructor(configurationParameters: ConfigurationParameters) {
    super(configurationParameters);
    const configuration = new Configuration(configurationParameters);
    this.users = new UsersApi(configuration);
  }

}
