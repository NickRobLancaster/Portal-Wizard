const app = Vue.createApp({
    data() {
        return {
            //Node 1 - Welcome Node
            node_1: true,
            node_selection_1: 0,
            //Node 2 - Basic Information
            node_2: false,
            node_selection_2: 0,
            
            address: '',
            address_2: '',
            city: '',
            state: '',
            zip: '',
            
            primary_phone: '',
            mobile_phone: '',           
            best_time_to_call: '',
            
            dob: '',
            ssn: '',
            
            show_next_employment: false,
            //Node 3 - Employment
            node_3: false,
            node_selection_3: 0,
            
            is_employed: 0,
            
            employer_name: '',
            employer_address: '',
            employer_address_2: '',
            employer_city: '',
            employer_state: '',
            employer_zip: '',
            
            pay_frequency: 0,
            taxable_income: 0,
            type_of_income: 0,
            
            
            //Node 4 - PSLF
            node_4: false,
            node_selection_4: 0,
            
            pslf: 0,
            more_than_30_hours: 0,
            type_employment_considered: 0,

            reveal_next_pslf: false,
            //Node 5 - Tax Filing Status
            node_5: false,
            node_selection_5: 0,
            
            tax_filing_status: 0,
            reveal_next_tax_filing: false,
            //Node 6 - Income
            node_6: false,
            node_selection_6: 0,
            
            more_less_same: 0,
            
            separated_from_spouse: 0,
            access_to_spouse_income: 0,
            can_submit_for_spouse: 0,
            spouse_has_federal_loans: 0,
            spouse_federal_loan_balance: 0,
            spouse_currently_working: 0,
            spouse_gross_income_monthly: 0,
            spouse_gross_income_yearly: 0,
            
            reveal_next_income: false,
            //Node 7 - Family Size
            node_7: false,
            node_selection_7: 0,
            
            family_size_under_18_unborn: null,
            household_size_excluding_children_spouse: null,
            other_people_living_with_you: null,
            support_6_months_outside_house: null,
            combined_fs: 0,
            //Node 7 - Requested Docs
            node_8: false,
            node_selection_8: 0,
            //Node 7 - How To Submit Docs
            node_9: false,
            node_selection_9: 0,
            
            submitting_documents_via: 0,
            
            doc_submission_preference: 0,

            //Toggle Button Display Change
            pslf_back_button: 0,
            
            reveal_6b: false,
            
            
            reveal_family_size_next: false,

            
            
            
        };
    },
    watch: {
//         taxable_income: function(val){      
//             if(val == 2){
//                 this.node_3 = false;
//                 this.node_5 = true;
//                 this.pslf_back_button = false;
//                 this.type_of_income = 0;

//             }            
//         },

        more_than_30_hours: function(val){
            if(val == 1){
                this.type_employment_considered = 0;
            }
        },


    },
    computed: {
        testComputed() {
            
        }
    },
    methods: {
        
        /*revealNextEmployment(){
            
            if(this.address.length >= 3 && this.city.length >= 3 && this.state.length >= 2 && this.zip.length >= 4 && this.primary_phone.length >= 10 && this.best_time_to_call > 0 && this.ssn.length === 9){
                this.show_next_employment = true;                
            } else {
                this.show_next_employment = false;
            }
        },*/
        
        
        questionFiveA(){
            
            
            if(this.access_to_spouse_income == 2 && this.is_employed == 1){
                this.more_less_same = 2;                
            }
            
            if(this.access_to_spouse_income == 2 && this.taxable_income == 2){
                this.reveal_family_size_next = true;
            }
            
            if(this.access_to_spouse_income == 1){
                this.reveal_family_size_next = false;
                
            }
        },
        
        clearFormOfIncome(){
            this.type_of_income = 0;
            this.reveal_next_pslf = false;
        },
        
        moveToTaxFilingNode(){
                this.node_3 = false;
                this.node_5 = true;
                this.pslf_back_button = false;
                this.type_of_income = 0;
        },

//         revealNextPSLF(){
            
//             if(this.is_employed == 2 && this.taxable_income == 1 && this.type_of_income > 0){
//                 // this.node_3 = false;
//                 // this.node_5 = true;
                
//                 this.reveal_next_pslf = true;
//             }

            
//         },
        clearPSLFisYesBranch(){
            this.more_than_30_hours = 0;
            this.type_employment_considered = 0;
        },
        
        clearIsNotEmployedBranch(){
            this.type_of_income = 0;
            this.taxable_income = 0;
        },
        
        getYearlyIncome(event){
            this.spouse_gross_income_yearly = (event.target.value * 12).toFixed(2);
        },
        
        getMonthlyIncome(event){
            this.spouse_gross_income_monthly = (event.target.value / 12).toFixed(2);    
        },
        
        setNodeOneTrue(){
            this.node_1 = false;
            this.node_2 = true;
        },
        
        backToNodeOne(){
            this.node_1 = true;
            this.node_2 = false;
        },
        
        setNodeTwoTrue(){
            this.node_2 = false;
            this.node_3 = true;
        },
        
        backToNodeTwo(){
            this.node_2 = true;
            this.node_3 = false;
        },
        
        setNodeThreeTrue(){
            
            this.node_3 = false;
            this.node_4 = true;
            
            
        },
        
        backToNodeThree(){
            this.node_3 = true;
            this.node_4 = false;
        },
        
        setNodeFourTrue(){
            this.node_4 = false;
            this.node_5 = true;
        },
        
        backToNodeFour(){
            this.node_4 = true;
            this.node_5 = false;
        },
        //Goes back and skip the last node to Employment Node
        backToEmploymentNode(){
            this.node_5 = false;
            this.node_3 = true;
        },
        
        setNodeFiveTrue(){
            this.node_5 = false;
            this.node_6 = true;
        },
        
        backToNodeFive(){
            this.node_5 = true;
            this.node_6 = false;
        },
        
        setNodeSixTrue(){
            this.node_6 = false;
            this.node_7 = true;
        },
        
        backToNodeSix(){
            this.node_6 = true;
            this.node_7 = false;
        },
        
        setNodeSevenTrue(){
            this.node_7 = false;
            this.node_8 = true;
        },
        
        backToNodeSeven(){
            this.node_7 = true;
            this.node_8 = false;
        },
        
        setNodeEightTrue(){
            this.node_8 = false;
            this.node_9 = true;
        },
        
        backToNodeEight(){
            this.node_8 = true;
            this.node_9 = false;
        }
    }

});

app.mount('#appBody');