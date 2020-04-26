package org.example.ledgerapi;

@FunctionalInterface
public interface StateSerializer {
    byte[] serialize(State state);
}
