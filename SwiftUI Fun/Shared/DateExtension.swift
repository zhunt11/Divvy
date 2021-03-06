
import Foundation

extension Date {
    func shortDate() -> String {
        let calendar = NSCalendar.init(calendarIdentifier: NSCalendar.Identifier.gregorian)
        let currentMonthInt = (calendar?.component(NSCalendar.Unit.month, from: self))!
        let currentYearInt = (calendar?.component(NSCalendar.Unit.year, from: self))!
        
        return "\(currentMonthInt)" + "/" + "\(currentYearInt)"
    }
}
