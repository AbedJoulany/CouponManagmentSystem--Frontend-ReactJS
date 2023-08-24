import React, {useState} from 'react';
import Navbar from '../components/Navbar';
import {MDBContainer, MDBIcon, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane} from "mdb-react-ui-kit";
import CustomersDataTable from "../components/CustomersDataTable";
import CompaniesDataTable from "../components/CompaniesDataTable";
import CompanyCouponsForm from "../components/CompanyCouponsForm";

const CompanyPage = () => {


    const [iconsActive, setIconsActive] = useState('generate-coupons');
    const handleIconsClick = (value) => {
        if (value === iconsActive) {
            return;
        }
        setIconsActive(value);
    };

    return (
        <div>
            <MDBContainer className="py-5 h-100">
                {/* ... Other components and sections ... */}

                {/* Pills for switching between Customers and Companies */}
                <MDBTabs pills className="mb-3">
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleIconsClick('generate-coupons')} active={iconsActive === 'generate-coupons'}>
                            <MDBIcon fas icon="ticket-alt" /> Generate Coupons
                        </MDBTabsLink>
                    </MDBTabsItem>
                    <MDBTabsItem>
                        <MDBTabsLink onClick={() => handleIconsClick('my-coupons')} active={iconsActive === 'my-coupons'}>
                            <MDBIcon fas icon='building' className='me-2' /> Company Coupons
                        </MDBTabsLink>
                    </MDBTabsItem>
                </MDBTabs>

                {/* Content based on Pills selection */}
                <MDBTabsContent>
                    <MDBTabsPane show={iconsActive === 'generate-coupons'}>
                        <CompanyCouponsForm />
                    </MDBTabsPane>
                    <MDBTabsPane show={iconsActive === 'my-coupons'}>
                        <CompaniesDataTable />
                    </MDBTabsPane>
                </MDBTabsContent>
            </MDBContainer>
        </div>
    );
};

export default CompanyPage;
