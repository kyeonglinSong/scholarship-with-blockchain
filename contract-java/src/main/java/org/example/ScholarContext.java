/*
 *  SPDX-License-Identifier: Apache-2.0
 */
package org.example;

import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.shim.ChaincodeStub;

class ScholarContext extends Context {

    public ScholarContext(ChaincodeStub stub) {
        super(stub);
        this.scholarList = new ScholarList(this);
        this.applyingList = new ApplyingList(this);
    }

    public ScholarList scholarList;
    public ApplyingList applyingList;

}