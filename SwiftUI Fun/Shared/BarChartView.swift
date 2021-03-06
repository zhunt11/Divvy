
import SwiftUI

struct BarChartView: View {
    let data: [RevenueData]
    
    var body: some View {
        ScrollView(.horizontal) {
            HStack(alignment: .bottom, spacing: 8) {
                ForEach(data, id: \.self) { item in
                    VStack (spacing: 8) {
                        Rectangle()
                            .fill(Color.green)
                            .frame(width: 75, height: CGFloat(item.value)/1000000.0)
                        Text(String(item.seq))
                    }
                }
            }
        }
        .padding()
    }
}

struct BarChartView_Previews: PreviewProvider {
    static var previews: some View {
        BarChartView(data: companies[0].revenue)
    }
}
