import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./components/MainLayout";
import reactRouts from "./utils/reactRouts";
import Home from "./pages/Home";
import Banking from "./pages/Banking";
import SignIn from "./pages/Auth/SignIn";
import BankingOtp from "./pages/Banking/BankingOtp";
import Wallet from "./pages/Wallet/index";
import AddCard from "./pages/Banking/AddCard";
import CustomerPage from "./pages/Customer";
import RecivesParent from "./pages/Recives";
import PaymentParent from "./pages/Payment";
import Accounts from "./pages/Accounts";
import PaymenResult from "./pages/Wallet/PaymenResult";
import Documents from "./pages/Documents";
import Notificatins from "./pages/Notifications";
import Report from "./pages/Report";
import AccountDetails from "./pages/Accounts/AccountDetails";
import Dashbord from "./pages/Dashbord";
import Customers from "./pages/Customers";
import FactorPage from "./pages/Factor";
import Safi from "./pages/Safi";
import Checks from "./pages/Checks";
import AddCheck from "./pages/Checks/AddCheck";
import AccountManaging from "./pages/AccountManaging";
import Products from "./pages/Products";
import Transactions from "./pages/Transactions";
import { UserParent } from "./pages/User/Index";
import Round from "./pages/Round";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  return (
    <Router>
      <MainLayout>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
        />
        <Routes>
          <Route path={reactRouts.home} element={<Home />} />
          <Route path={reactRouts.auth.signIn} element={<SignIn />} />
          {/* <Route path={reactRouts.banking.main} element={<Banking />} /> */}
          {/* <Route path={reactRouts.banking.Otp} element={<BankingOtp />} /> */}
          {/* <Route path={reactRouts.customer.main} element={<CustomerPage />} /> */}
          {/* <Route path={reactRouts.banking.addcart} element={<AddCard />} /> */}
          {/* <Route path={reactRouts.wallet.main} element={<Wallet />} /> */}
          {/* <Route path={reactRouts.wallet.payment.result} element={<PaymenResult />} /> */}
          {/* <Route path={reactRouts.recives.main} element={<RecivesParent />} /> */}
          {/* <Route path={reactRouts.payment.main} element={<PaymentParent />} /> */}
          {/* <Route path={reactRouts.accounts.main} element={<Accounts />} /> */}
          {/* <Route path={reactRouts.accounts.details} element={<AccountDetails />} /> */}
          {/* <Route path={reactRouts.documents.main} element={<Documents />} /> */}
          {/* <Route path={reactRouts.notifications.main} element={<Notificatins />} /> */}
          {/* <Route path={reactRouts.report.main} element={<Report />} /> */}
          {/* <Route path={reactRouts.dashbord.main} element={<Dashbord />} /> */}
          {/* <Route path={reactRouts.customers.main} element={<Customers />} /> */}
          {/* <Route path={reactRouts.Discount.main} element={<Discount />} /> */}
          {/* 
          <Route path={reactRouts.factor.main} element={<FactorPage />} />
          <Route path={reactRouts.safi.main} element={<Safi />} />
          <Route path={reactRouts.checks.main} element={<Checks />} />
          <Route path={reactRouts.checks.add} element={<AddCheck />} />
          <Route
            path={reactRouts.reportAcount.main}
            element={<AccountManaging />}
          />
          <Route path={reactRouts.products.main} element={<Products />} />
          <Route
            path={reactRouts.transactions.main}
            element={<Transactions />}
          /> */}
          <ProtectedRoute
            path={reactRouts.banking.main}
            element={<Banking />}
            requiredRoles={["actions", "admin"]}
          />
          <ProtectedRoute
            path={reactRouts.banking.Otp}
            element={<BankingOtp />}
            requiredRoles={["actions", "admin"]}
          />
          <ProtectedRoute
            path={reactRouts.banking.addcart}
            element={<AddCard />}
            requiredRoles={["actions", "admin"]}
          />
          <ProtectedRoute
            path={reactRouts.wallet.main}
            element={<Wallet />}
            requiredRoles={["actions", "admin"]}
          />
          <ProtectedRoute
            path={reactRouts.wallet.payment.result}
            element={<PaymenResult />}
            requiredRoles={["actions", "admin"]}
          />
          <ProtectedRoute
            path={reactRouts.customer.main}
            element={<CustomerPage />}
            requiredRoles={["actions", "admin"]}
          />
          <ProtectedRoute
            path={reactRouts.recives.main}
            element={<RecivesParent />}
            requiredRoles={["actions", "admin"]}
          />
          <ProtectedRoute
            path={reactRouts.payment.main}
            element={<PaymentParent />}
            requiredRoles={["admin", "actions"]}
          />
          <ProtectedRoute
            path={reactRouts.accounts.main}
            element={<Accounts />}
            requiredRoles={["admin", "management"]}
          />
          <ProtectedRoute
            path={reactRouts.accounts.details}
            element={<AccountDetails />}
            requiredRoles={["admin", "management"]}
          />
          <ProtectedRoute
            path={reactRouts.documents.main}
            element={<Documents />}
            requiredRoles={["admin", "settings"]}
          />
          <ProtectedRoute
            path={reactRouts.notifications.main}
            element={<Notificatins />}
            requiredRoles={["admin", "settings", "actions"]}
          />
          <ProtectedRoute
            path={reactRouts.report.main}
            element={<Report />}
            requiredRoles={["admin", "management"]}
          />
          <ProtectedRoute
            path={reactRouts.dashbord.main}
            element={<Dashbord />}
            requiredRoles={["admin"]}
          />
          <ProtectedRoute
            path={reactRouts.customers.main}
            element={<Customers />}
            requiredRoles={["admin", "actions"]}
          />
          <ProtectedRoute
            path={reactRouts.Discount.main}
            element={<Discount />}
            requiredRoles={["admin", "management"]}
          />
          //?accounting section
          <ProtectedRoute
            path={reactRouts.factor.main}
            element={<FactorPage />}
            requiredRoles={["admin", "accounting"]}
          />
          <ProtectedRoute
            path={reactRouts.safi.main}
            element={<Safi />}
            requiredRoles={["admin", "accounting"]}
          />
          <ProtectedRoute
            path={reactRouts.checks.main}
            element={<Checks />}
            requiredRoles={["admin", "accounting"]}
          />
          <ProtectedRoute
            path={reactRouts.checks.add}
            element={<AddCheck />}
            requiredRoles={["admin", "accounting"]}
          />
          <ProtectedRoute
            path={reactRouts.reportAcount.main}
            element={<AccountManaging />}
            requiredRoles={["admin", "accounting"]}
          />
          <ProtectedRoute
            path={reactRouts.products.main}
            element={<Products />}
            requiredRoles={["admin", "accounting"]}
          />
          <ProtectedRoute
            path={reactRouts.transactions.main}
            element={<Transactions />}
            requiredRoles={["admin", "accounting"]}
          />
          //? manageing section
          <Route path={reactRouts.user.main} element={<UserParent />} />
          <Route path={reactRouts.round.main} element={<Round />} />

          <ProtectedRoute
            path={reactRouts.user.main}
            element={<UserParent />}
            requiredRoles={['admin', 'management']}
          />
          <ProtectedRoute
            path={reactRouts.round.main}
            element={<Round />}
            requiredRoles={['admin', 'settings']}
          />

        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
