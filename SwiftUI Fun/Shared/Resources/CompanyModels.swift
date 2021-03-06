
import Foundation

struct Company: Hashable, Codable, Identifiable {
    var id: Int
    var name: String
    var location: Location
    var revenue: [RevenueData]
    
    struct Location: Hashable, Codable {
        var address: String
        var city: String
        var country: String
    }
}

struct RevenueData: Hashable, Codable {
    var seq: Int
    var date: String
    var value: Double
}
