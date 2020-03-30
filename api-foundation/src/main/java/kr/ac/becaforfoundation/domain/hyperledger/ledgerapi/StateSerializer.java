package kr.ac.becaforfoundation.domain.hyperledger.ledgerapi;

@FunctionalInterface
public interface StateSerializer {
    byte[] serialize(State state);
}
