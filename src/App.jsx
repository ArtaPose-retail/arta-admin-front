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
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Discount from "./pages/Actions/Discount/Index";
import Sellpage from "./pages/Actions/Sellpage.jsx";
import DigitalLable from "./pages/DigiTalLable/index.jsx";
import StoreInfo from "./pages/Setting/StoreInfo/index.jsx";

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
          <Route path="/unauthorized" element={<div>not access</div>} />
          <Route
            path={reactRouts.sellpage}
            element={
              <ProtectedRoute
                element={Sellpage}
                requiredRole={["actions", "admin"]}
              />
            }
          />
          <Route
            path={reactRouts.banking.main}
            element={
              <ProtectedRoute
                element={Banking}
                requiredRole={["actions", "admin"]}
              />
            }
          />

          <Route
            path={reactRouts.banking.Otp}
            element={
              <ProtectedRoute
                element={BankingOtp}
                requiredRole={["actions", "admin"]}
              />
            }
          />
          <Route
            path={reactRouts.customer.main}
            element={
              <ProtectedRoute
                element={CustomerPage}
                requiredRole={["actions", "admin"]}
              />
            }
          />
          <Route
            path={reactRouts.banking.addcart}
            element={
              <ProtectedRoute
                element={AddCard}
                requiredRole={["admin", "actions"]}
              />
            }
          />
          <Route
            path={reactRouts.wallet.main}
            element={
              <ProtectedRoute
                element={Wallet}
                requiredRole={["admin", "actions"]}
              />
            }
          />
          <Route
            path={reactRouts.wallet.payment.result}
            element={
              <ProtectedRoute
                element={PaymenResult}
                requiredRole={["admin", "actions"]}
              />
            }
          />
          <Route
            path={reactRouts.recives.main}
            element={
              <ProtectedRoute
                element={RecivesParent}
                requiredRole={["admin", "actions"]}
              />
            }
          />
          <Route
            path={reactRouts.payment.main}
            element={
              <ProtectedRoute
                element={PaymentParent}
                requiredRole={["admin", "actions"]}
              />
            }
          />
          <Route
            path={reactRouts.accounts.main}
            element={
              <ProtectedRoute
                element={Accounts}
                requiredRole={["admin", "management"]}
              />
            }
          />
          <Route
            path={reactRouts.accounts.details}
            element={
              <ProtectedRoute
                element={AccountDetails}
                requiredRole={["admin", "management"]}
              />
            }
          />
          <Route
            path={reactRouts.documents.main}
            element={
              <ProtectedRoute
                element={Documents}
                requiredRole={["admin", "settings"]}
              />
            }
          />
          <Route
            path={reactRouts.notifications.main}
            element={
              <ProtectedRoute
                element={Notificatins}
                requiredRole={["admin", "settings", "actions"]}
              />
            }
          />
          <Route
            path={reactRouts.report.main}
            element={
              <ProtectedRoute
                element={Report}
                requiredRole={["admin", "management"]}
              />
            }
          />
          <Route
            path={reactRouts.dashbord.main}
            element={
              <ProtectedRoute element={Dashbord} requiredRole={["admin"]} />
            }
          />
          <Route
            path={reactRouts.customers.main}
            element={
              <ProtectedRoute
                element={Customers}
                requiredRole={["admin", "actions"]}
              />
            }
          />
          <Route
            path={reactRouts.Discount.main}
            element={
              <ProtectedRoute
                element={Discount}
                requiredRole={["admin", "management"]}
              />
            }
          />
          <Route
            path={reactRouts.factor.main}
            element={
              <ProtectedRoute
                element={FactorPage}
                requiredRole={["admin", "accounting"]}
              />
            }
          />
          <Route
            path={reactRouts.safi.main}
            element={
              <ProtectedRoute
                element={Safi}
                requiredRole={["admin", "accounting"]}
              />
            }
          />
          <Route
            path={reactRouts.checks.main}
            element={
              <ProtectedRoute
                element={Checks}
                requiredRole={["admin", "accounting"]}
              />
            }
          />
          <Route
            path={reactRouts.checks.add}
            element={
              <ProtectedRoute
                element={AddCheck}
                requiredRole={["admin", "accounting"]}
              />
            }
          />
          <Route
            path={reactRouts.reportAcount.main}
            element={
              <ProtectedRoute
                element={AccountManaging}
                requiredRole={["admin", "accounting"]}
              />
            }
          />
          <Route
            path={reactRouts.products.main}
            element={
              <ProtectedRoute
                element={Products}
                requiredRole={["admin", "accounting"]}
              />
            }
          />
          <Route
            path={reactRouts.transactions.main}
            element={
              <ProtectedRoute
                element={Transactions}
                requiredRole={["admin", "accounting"]}
              />
            }
          />

          {/* Managing section */}
          <Route
            path={reactRouts.user.main}
            element={
              <ProtectedRoute
                element={UserParent}
                requiredRole={["admin", "management"]}
              />
            }
          />
          <Route
            path={reactRouts.round.main}
            element={
              <ProtectedRoute
                element={Round}
                requiredRole={["admin", "management"]}
              />
            }
          />
          <Route
            path={reactRouts.digitalLable.main}
            element={
              <ProtectedRoute
                element={DigitalLable}
                requiredRole={["admin", "settings"]}
              />
            }
          />
          <Route
            path={reactRouts.setting.store.info}
            element={
              <ProtectedRoute
                element={StoreInfo}
                requiredRole={["admin"]}
              />
            }
          />

        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
