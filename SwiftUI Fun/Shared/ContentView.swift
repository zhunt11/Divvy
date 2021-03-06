
import SwiftUI

struct ContentView: View {
    var body: some View {
        NavigationView {
            List(companies.sorted {$0.name < $1.name}) { company in
                NavigationLink(
                    destination: CompanyDetailView(company: company),
                    label: {
                        Text(company.name)
                    })
            }
            .navigationBarTitle(Text("Company Directory"))
            .listStyle(InsetGroupedListStyle())
        }
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}
