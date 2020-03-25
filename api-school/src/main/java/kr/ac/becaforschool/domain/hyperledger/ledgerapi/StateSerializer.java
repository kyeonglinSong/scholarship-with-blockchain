package kr.ac.becaforschool.domain.hyperledger.ledgerapi;

@FunctionalInterface
public interface StateSerializer {
    byte[] serialize(State state);
}
