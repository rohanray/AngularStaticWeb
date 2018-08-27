/* export class ViewResultsModel {
  constructor(
    public internalClaimId: string,
    public claimType: ClaimType,
    public contractId: string,
    public diagnosis: string,
    public umid: string
  ) {}
} */

import {ClaimType } from '../enum/common.enum';
export interface ViewResultsModel {
    internalClaimId: string,
    claimType: ClaimType,
    contractId: string,
    diagnosis: string,
    umid: string
}