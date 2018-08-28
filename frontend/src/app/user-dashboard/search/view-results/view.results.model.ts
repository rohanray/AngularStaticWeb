export class ViewResultsModel {
  constructor(
    public internalClaimId: string,
    public claimType: ClaimType,
    public contractId: string,
    public diagnosis: string,
    public umid: string
  ) {}
}

enum ClaimType {
  'Professional',
  'Institutional',
  'DME',
  'Dental',
  'Initial',
  'Capitated',
  'Chart reviews',
  'Adjustments',
  'Voids'
}
