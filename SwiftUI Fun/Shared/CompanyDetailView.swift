
import SwiftUI
import Charts

struct CompanyDetailView: View {
    let company: Company
    
    var body: some View {
        GeometryReader { geometry in
            VStack(alignment: .leading) {
                VStack(alignment: .leading) {
                    Text(company.name)
                        .font(.system(size: 48))
                        .fontWeight(.bold)
                    Text("\(company.location.address)\n\(company.location.city), \(company.location.country)")
                        .font(.title3)
                }
                
                Chart(data: chartValues(data: company.revenue))
                    .chartStyle(
                        LineChartStyle(.quadCurve, lineColor: .blue, lineWidth: 5)
                    )
                    .frame(width: geometry.size.width-32, height: 320, alignment: .center)
                Spacer()
            }
            .padding()
        }
    }
}

func chartValues(data: [RevenueData]) -> Array<Double> {
    var values: Array<Double> = []
    for data in data {
        values.append(data.value/100000000)
    }
    
    return values
}

struct CompanyDetailView_Previews: PreviewProvider {
    static var previews: some View {
        CompanyDetailView(company: companies[0])
    }
}
