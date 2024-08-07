// import "./App.css";

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
import { Provider } from "react-redux";
import { store } from './Redux/store';
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

function App() {
  return (
    <Router>
      <Provider store={store}>

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
            <Route path={reactRouts.banking.main} element={<Banking />} />
            <Route path={reactRouts.banking.Otp} element={<BankingOtp />} />
            <Route path={reactRouts.banking.addcart} element={<AddCard />} />
            <Route path={reactRouts.wallet.main} element={<Wallet />} />
            <Route path={reactRouts.wallet.payment.result} element={<PaymenResult />} />
            <Route path={reactRouts.customer.main} element={<CustomerPage />} />
            <Route path={reactRouts.recives.main} element={<RecivesParent />} />
            <Route path={reactRouts.payment.main} element={<PaymentParent />} />
            <Route path={reactRouts.accounts.main} element={<Accounts />} />
            <Route path={reactRouts.accounts.details} element={<AccountDetails />} />
            <Route path={reactRouts.documents.main} element={<Documents />} />
            <Route path={reactRouts.notifications.main} element={<Notificatins />} />
            <Route path={reactRouts.report.main} element={<Report />} />
            <Route path={reactRouts.dashbord.main} element={<Dashbord />} />
            <Route path={reactRouts.customers.main} element={<Customers />} />
            //?account section
            <Route path={reactRouts.factor.main} element={<FactorPage />} />
            <Route path={reactRouts.safi.main} element={<Safi />} />
            <Route path={reactRouts.checks.main} element={<Checks />} />
            <Route path={reactRouts.checks.add} element={<AddCheck />} />
            <Route path={reactRouts.reportAcount.main} element={<AccountManaging />} />
            <Route path={reactRouts.products.main} element={<Products />} />
            <Route path={reactRouts.transactions.main} element={<Transactions />} />
          </Routes>
        </MainLayout>
      </Provider>

    </Router>
  );
}

export default App;
