
import mongoose from "mongoose";
import Business from "../../models/businessModel";
import { getByBusinessID } from '../businessService';




// Mock interfaces
class MockIBusiness {
  public user_id: mongoose.Types.ObjectId = new mongoose.Types.ObjectId();
  public business_id: string = 'mockBusinessId';
  public detail: any = {}; // Assuming detail is an object
  public liked: boolean = false;
  public visited: boolean = false;
}

jest.mock("../../models/businessModel", () => ({
  findOne: jest.fn(),
}));

describe('getByBusinessID() getByBusinessID method', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Happy Path Tests
  it('should return a business object when a valid business ID is provided', async () => {
    const mockBusiness = new MockIBusiness();
    (Business.findOne as jest.MockedFunction<typeof Business.findOne>).mockResolvedValue(mockBusiness as any as never);

    const result = await getByBusinessID('validBusinessId');
    expect(result).toEqual(mockBusiness);
    expect(Business.findOne).toHaveBeenCalledWith({ business_id: 'validBusinessId' });
  });

  // Edge Case Tests
  it('should return null when no business is found for the given ID', async () => {
    (Business.findOne as jest.MockedFunction<typeof Business.findOne>).mockResolvedValue(null as any as never);

    const result = await getByBusinessID('nonExistentBusinessId');
    expect(result).toBeNull();
    expect(Business.findOne).toHaveBeenCalledWith({ business_id: 'nonExistentBusinessId' });
  });

  it('should handle errors thrown by the database query', async () => {
    const error = new Error('Database query failed');
    (Business.findOne as jest.MockedFunction<typeof Business.findOne>).mockRejectedValue(error as never);

    await expect(getByBusinessID('anyBusinessId')).rejects.toThrow('Database query failed');
    expect(Business.findOne).toHaveBeenCalledWith({ business_id: 'anyBusinessId' });
  });
});