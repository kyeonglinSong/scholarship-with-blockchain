/*
SPDX-License-Identifier: Apache-2.0
*/

package org.example;

import org.example.ledgerapi.StateList;
import org.hyperledger.fabric.contract.Context;


public class ScholarList {

    private StateList stateList;

    public ScholarList(Context ctx) {
        this.stateList = StateList.getStateList(ctx, Scholarship.class.getSimpleName(), Scholarship::deserialize, Scholarship::serialize);
    }

    public ScholarList addScholarship(Scholarship scholarship) {
        stateList.addState(scholarship);
        return this;
    }


    public ScholarList updateScholarship (Scholarship scholarship) {
        this.stateList.updateState(scholarship);
        return this;
    }
    public Scholarship getScholarship(String scholarshipKey) {
        return (Scholarship) this.stateList.getState(scholarshipKey);
    }
}
