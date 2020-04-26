/*
SPDX-License-Identifier: Apache-2.0
*/

package org.example;


import org.example.ledgerapi.StateList;
import org.hyperledger.fabric.contract.Context;

public class ApplyingList {

    private StateList stateList;

    public ApplyingList(Context ctx) {
        this.stateList = StateList.getStateList(ctx, Applying.class.getSimpleName(), Applying::deserialize, Applying::serialize);
    }

    public ApplyingList addApplying(Applying applying) {
        stateList.addState(applying);
        return this;
    }

    public Applying getApplying(String applyingKey) {
        return (Applying) this.stateList.getState(applyingKey);
    }

    public ApplyingList updateApplying (Applying applying) {
        this.stateList.updateState(applying);
        return this;
    }

}
