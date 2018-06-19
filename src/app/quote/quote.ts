import { Quote } from "@angular/compiler";

export interface IQuote {
    QuoteId: number,
    UnderwriterId: number,
    UnderwriterName: string,
    UnderwriterSupportsVoluntaryExcess: boolean,
    Premium: number,
    UnderwriterCompulsoryExcess: string,
    UnderwriterMaxPenaltyPoints: number,
    UnderwriterMaxPenaltyPointsExpiryYears: number,
    UnderwriterMaxFaultClaims: number,
    UnderwriterMaxFaultClaimsExpiryYears: number,
    UnderwriterMinimumVehicleValue: number    
}
