import React, {useState,useCallback} from 'react';
import Navbar from '../components/Navbar';
import {MDBContainer, MDBIcon, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane} from "mdb-react-ui-kit";
import CompanyCouponsForm from "../components/CompanyCouponsForm";
import {request} from "../api/axiosHelper";
import CouponsDataTable from "../components/CouponsDataTable";

const CompanyPage = () => {


    const [iconsActive, setIconsActive] = useState('generate-coupons');
    const handleIconsClick = (value) => {
        if (value === iconsActive) {
            return;
        }
        setIconsActive(value);
    };

    const handleSubmit = async (formData, event) => {
        event.preventDefault(); // Prevent page refresh
        console.log(formData);
        try {
                const response = await request('POST', `/api/company/addCoupon`, formData);
                //setSuccessMessage('Customer saved successfully!');
            }
        catch (error) {
            console.error('Error adding/updating customer:', error);
        }
    };
    const search = useCallback((value) => {
        let [phrase, columns] = value.split(' in:').map((str) => str.trim());

        if (columns) {
            columns = columns.split(',').map((str) => str.toLowerCase().trim());
        }

        return {phrase, columns};
    }, []);

    return (
        <div>
            <MDBContainer className="py-5 h-100">
                {/* ... Other components and sections ... */}

                {/* Pills for switching between Customers and Companies */}
                {/*<MDBTabs pills className="mb-3">
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
                </MDBTabs>*/}

                {/* Content based on Pills selection */}
                {/*<MDBTabsContent>
                    <MDBTabsPane show={iconsActive === 'generate-coupons'}>
                        <CompanyCouponsForm handleSubmit={handleSubmit}/>
                    </MDBTabsPane>
                    <MDBTabsPane show={iconsActive === 'my-coupons'}>
                    </MDBTabsPane>
                </MDBTabsContent>*/}

            <CouponsDataTable/>
            </MDBContainer>
        </div>
    );
};

export default CompanyPage;
