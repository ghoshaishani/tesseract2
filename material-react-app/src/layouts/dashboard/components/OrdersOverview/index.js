/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";

// Material Dashboard 2 React example components
import TimelineItem from "examples/Timeline/TimelineItem";

function OrdersOverview() {
  return (
    <Card sx={{ height: "100%" }}>
      <MDBox pt={3} px={3}>
        <MDTypography variant="h6" fontWeight="medium">
          Check Cyber Threats
        </MDTypography>
      </MDBox>
      <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput type="text" label="input 1" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="input 2" variant="standard" fullWidth />
            </MDBox>
            <MDBox mb={2}>
              <MDInput type="text" label="input 3" variant="standard" fullWidth />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth>
                Submit
              </MDButton>
            </MDBox>
          </MDBox>
        </MDBox>
      {/* <MDBox p={2}>
        <TimelineItem
          color="success"
          icon="notifications"
          title="$2400, Design changes"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="error"
          icon="inventory_2"
          title="New order #1832412"
          dateTime="21 DEC 11 PM"
        />
        <TimelineItem
          color="info"
          icon="shopping_cart"
          title="Server payments for April"
          dateTime="21 DEC 9:34 PM"
        />
        <TimelineItem
          color="warning"
          icon="payment"
          title="New card added for order #4395133"
          dateTime="20 DEC 2:20 AM"
        />
        <TimelineItem
          color="primary"
          icon="vpn_key"
          title="New card added for order #4395133"
          dateTime="18 DEC 4:54 AM"
          lastItem
        />
      </MDBox> */}
    </Card>
  );
}

export default OrdersOverview;
