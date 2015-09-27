CSRC = problem7-c.c
COUT = problem7-c
CCSRC = problem7-cc.cc
CCOUT = problem7-cc
CC = gcc
CPPC = g++

all: clean c cc

clean:
	rm -f $(COUT) $(CCOUT) a.out

c:
	$(CC) $(CFLAGS) -o $(COUT) $(CSRC)

cc:
	$(CPPC) $(CFLAGS) -o $(CCOUT) $(CCSRC)